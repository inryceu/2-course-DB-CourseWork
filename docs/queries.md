Ось звіт у форматі `.md` на основі наданого коду NestJS/Prisma. Я перетворив логіку JavaScript-обробки на еквівалентні SQL-запити для PostgreSQL, оскільки ви використовуєте Prisma.

-----

# Звіт: Аналітичні SQL-запити для ігрової платформи

Цей документ містить опис аналітичних запитів, реалізованих у системі, включаючи бізнес-мету, SQL-реалізацію та пояснення логіки вибірки даних.

-----

### Запит 1: Потенціал регіональних продажів

**Бізнес-питання:**
Які регіони мають найбільший потенціал доходу на основі списків бажаного (wishlist) користувачів? Це дозволяє зрозуміти, де попит перевищує фактичні покупки, та налаштувати маркетингові кампанії.

**SQL-запит:**

```sql
SELECT
    u.region,
    SUM(g.price) AS total_amount,
    COUNT(l.game_id) AS total_games,
    COUNT(DISTINCT l.user_id) AS unique_users,
    ROUND(SUM(g.price) / NULLIF(COUNT(DISTINCT l.user_id), 0), 2) AS average_amount_per_user
FROM libraries l
JOIN users u ON l.user_id = u.id
JOIN games g ON l.game_id = g.id
WHERE l.ownership = 'wishlist'
GROUP BY u.region
ORDER BY total_amount DESC;
```

**Пояснення:**

  - **JOIN:** Об'єднуємо таблицю `libraries` з `users` (для отримання регіону) та `games` (для отримання ціни гри).
  - **WHERE:** Фільтруємо записи, де `ownership = 'wishlist'`, щоб аналізувати лише бажані, а не куплені ігри.
  - **GROUP BY:** Групуємо результати за регіоном користувача.
  - **AGGREGATION:**
      - `SUM(g.price)`: Рахує загальну вартість усіх ігор у вішлистах регіону.
      - `COUNT(DISTINCT l.user_id)`: Рахує кількість унікальних користувачів, щоб уникнути дублювання, якщо користувач має кілька ігор у вішлисті.
  - **ORDER:** Сортуємо від найбільшої суми потенційного доходу до найменшої.

**Приклад виводу:**
| region | total\_amount | total\_games | unique\_users | average\_amount\_per\_user |
|:---|:---|:---|:---|:---|
| North America | 15400.50 | 320 | 150 | 102.67 |
| Europe | 12300.00 | 280 | 140 | 87.86 |
| Asia | 8900.25 | 210 | 110 | 80.91 |

-----

### Запит 2: Коефіцієнт складності досягнень (Rarity Index)

**Бізнес-питання:**
Які ігри є найскладнішими для гравців? Ми визначаємо це через відношення отриманих досягнень до максимально можливої кількості досягнень серед усіх власників гри.

**SQL-запит:**

```sql
WITH GameStats AS (
    SELECT
        g.id,
        g.title,
        COUNT(a.id) AS total_achievements,
        COUNT(DISTINCT l.user_id) AS total_owners
    FROM games g
    LEFT JOIN achievements a ON g.id = a.game_id
    JOIN libraries l ON g.id = l.game_id
    WHERE l.ownership = 'purchased'
    GROUP BY g.id, g.title
    HAVING COUNT(a.id) > 0 AND COUNT(DISTINCT l.user_id) > 0
),
UnlockStats AS (
    SELECT
        a.game_id,
        COUNT(*) AS total_unlocks
    FROM user_achieve_connection uac
    JOIN achievements a ON uac.achievement_id = a.id
    GROUP BY a.game_id
)
SELECT
    gs.title,
    gs.total_achievements,
    gs.total_owners,
    COALESCE(us.total_unlocks, 0) AS total_unlocks,
    ROUND(
        (COALESCE(us.total_unlocks, 0)::numeric / (gs.total_achievements * gs.total_owners)) * 100,
        2
    ) AS unlock_percentage
FROM GameStats gs
LEFT JOIN UnlockStats us ON gs.id = us.game_id
ORDER BY unlock_percentage ASC;
```

**Пояснення:**

  - **GameStats (CTE):** Підраховує загальну кількість ачівок для гри та кількість користувачів, які придбали гру (`ownership = 'purchased'`).
  - **UnlockStats (CTE):** Підраховує загальну кількість *фактично отриманих* ачівок гравцями для кожної гри через таблицю зв'язку `user_achieve_connection`.
  - **Calculation:** Обчислює відсоток завершення за формулою: `(Отримані ачівки / (Всього ачівок у грі * Кількість власників)) * 100`.
  - **ORDER:** Сортує за зростанням відсотка (найменший відсоток = найскладніша гра).

**Приклад виводу:**
| title | total\_achievements | total\_owners | total\_unlocks | unlock\_percentage |
|:---|:---|:---|:---|:---|
| Dark Souls III | 50 | 1000 | 5000 | 10.00 |
| Elden Ring | 42 | 2000 | 25000 | 29.76 |
| Minecraft | 120 | 5000 | 450000 | 75.00 |

-----

### Запит 3: Популярність жанрів (тегів) за віковими групами

**Бізнес-питання:**
Які ігрові жанри (теги) є найбільш популярними серед різних вікових категорій користувачів? Це допомагає таргетувати рекомендації ігор.

**SQL-запит:**

```sql
SELECT
    CASE
        WHEN u.age BETWEEN 13 AND 17 THEN '13-17'
        WHEN u.age BETWEEN 18 AND 24 THEN '18-24'
        WHEN u.age BETWEEN 25 AND 34 THEN '25-34'
        WHEN u.age BETWEEN 35 AND 44 THEN '35-44'
        WHEN u.age >= 45 THEN '45+'
        ELSE 'unknown'
    END AS age_group,
    t.tag_name,
    COUNT(*) AS total_occurrences,
    COUNT(DISTINCT u.id) AS unique_users
FROM libraries l
JOIN users u ON l.user_id = u.id
JOIN games g ON l.game_id = g.id
JOIN game_tag_connection gtc ON g.id = gtc.game_id
JOIN tags t ON gtc.tag_id = t.id
WHERE l.ownership = 'purchased'
GROUP BY age_group, t.tag_name
ORDER BY age_group, total_occurrences DESC;
```

**Пояснення:**

  - **CASE WHEN:** Виконує сегментацію користувачів на вікові групи ("бакети") прямо в SQL, що є аналогом функції `getAgeGroup` у коді.
  - **JOINS:** Проходить ланцюжок зв'язків: `libraries` -\> `users` (для віку), `libraries` -\> `games` -\> `game_tag_connection` -\> `tags` (для жанрів).
  - **WHERE:** Аналізуються лише куплені ігри.
  - **GROUP BY:** Групування спочатку за віковою групою, потім за назвою тегу.
  - **Count:** Підрахунок, скільки разів цей тег зустрічався в бібліотеках користувачів цієї вікової групи.

**Приклад виводу:**
| age\_group | tag\_name | total\_occurrences | unique\_users |
|:---|:---|:---|:---|
| 13-17 | Shooter | 450 | 120 |
| 13-17 | Battle Royale | 380 | 100 |
| 18-24 | RPG | 600 | 200 |
| 18-24 | Shooter | 550 | 180 |
| 25-34 | Strategy | 300 | 90 |

-----

### Наступний крок

Чи хотіли б ви, щоб я оптимізував TypeScript-код, переписавши логіку обробки даних (наприклад, групування та фільтрацію) на рівень бази даних за допомогою `Prisma.sql` або сирих запитів (`$queryRaw`) для підвищення продуктивності?