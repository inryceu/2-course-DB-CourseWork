# Steam Backend API

## Опис проекту

**Steam Backend API** — це backend-платформа для ігрової платформи, що схожа на Steam. Проєкт надає RESTful API для управління користувачами, іграми, бібліотеками, досягненнями, оглядами та іншими функціями ігрової платформи.

### Призначення

Проєкт реалізує систему управління ігровою платформою з повним набором функціональності:
- Управління користувачами та автентифікація
- Каталог ігор з детальною інформацією
- Бібліотека користувача (придбані/бажані ігри)
- Система досягнень
- Огляди та рейтинги ігор
- Система збережень
- Дружні зв'язки між користувачами
- Новинна стрічка ігор
- Події та активності
- Аналітичні запити для бізнес-аналітики

## [Команда](\CONTRIBUTIONS.md)

## Технологічний стек

### Мова програмування та версія
- **TypeScript** 5.3.3
- **Node.js** 22.21.1 (railway)

### Фреймворк
- **NestJS** 11.1.9 — Node.js фреймворк для побудови ефективних та масштабованих серверних додатків з чіткою структурою

### ORM / SQL Builder
- **Prisma** 5.22.0 — ORM для Node.js TypeScript
- **PostgreSQL** 16

### Фреймворк тестування
- **Jest** 29.7.0 — JavaScript фреймворк для тестування
- **@nestjs/testing** 11.1.9 — утиліти для тестування NestJS додатків
- **Supertest** 7.1.4 — HTTP assertions для тестування API

### Інші технології
- **Docker** та **Docker Compose** — для контейнеризації та оркестрації всіх сервісів (backend, PostgreSQL, тестова БД)
- **Swagger** — автоматична генерація документації API
- **bcrypt** — хешування паролів
- **class-validator** та **class-transformer** — валідація та трансформація даних

## Інструкції з налаштування

### Передумови

- **Docker** та **Docker Compose** встановлені на вашій системі
- Git для клонування репозиторію

### Швидкий старт

1. **Клонування репозиторію**

```bash
git clone <https://github.com/inryceu/2-course-DB-CourseWork.git>
cd <2-course-DB-CourseWork>
```

2. **Запуск всіх сервісів**

```bash
docker-compose up -d
```

Це автоматично:
- Збудує Docker образ для backend додатку
- Запустить PostgreSQL базу даних (основну та тестову)
- Запустить backend додаток
- Застосує міграції бази даних

Застосунок буде доступний за адресою `http://localhost:3000`

### Налаштування (опціонально)

Якщо потрібно змінити параметри за замовчуванням, створіть `.env` файл у корені проєкту:

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=steam_password
POSTGRES_DB=steam_db
POSTGRES_PORT=5432
POSTGRES_TEST_DB=steam_db_test
POSTGRES_TEST_PORT=5433
APP_PORT=3000
```

**Параметри за замовчуванням:**
- PostgreSQL порт: `5432` (основна БД), `5433` (тестова БД)
- Користувач: `postgres`
- Пароль: `steam_password`
- База даних: `steam_db` (основна), `steam_db_test` (тестова)
- Backend порт: `3000`

**Зупинка сервісів:**
```bash
docker-compose down
```

**Перезапуск сервісів:**
```bash
docker-compose restart
```

**Перебудова та запуск:**
```bash
docker-compose up -d --build
```

**Виконання міграцій вручну (якщо потрібно):**
```bash
docker-compose exec app npx prisma migrate deploy
```

## Запуск додатку (локальна розробка)

Якщо потрібно запустити додаток локально для розробки:

### Режим розробки

```bash
cd server
npm install
npm run start:dev
```

## Документація API

Після запуску додатку Swagger документація доступна за адресою:

- **[Swagger UI](https://2-course-db-coursework-production.up.railway.app/api)**: http://localhost:3000/api
- **[JSON схема](https://2-course-db-coursework-production.up.railway.app/api-json)**: http://localhost:3000/api-json

## Запуск тестів

**Примітка:** Для запуску тестів потрібно мати запущені контейнери з базами даних. Переконайтесь, що `docker-compose up -d` виконано.

### Запуск всіх тестів

```bash
cd server
npm install
npm test
```

### Запуск юніт-тестів

```bash
npm run test:unit
```

### Запуск e2e тестів

**Важливо:** Перед запуском e2e тестів переконайтесь, що `DATABASE_URL_TEST` встановлено та вказує на тестову базу даних, щоб уникнути видалення даних з продакшн бази (правила написані кров'ю, u know...).

Тестова база даних автоматично запускається разом з основною через `docker-compose`.

```bash
npm run test:e2e
```

### Запуск тестів з покриттям коду

```bash
npm run test:cov
```

### Тести в режимі спостереження

```bash
npm run test:watch
```

## Структура проєкту

```
project-root/
├── server/                     # Основна директорія серверного додатку
│   ├── src/                    # Вихідний код
│   │   ├── main.ts            # Точка входу додатку
│   │   ├── app.module.ts      # Головний модуль NestJS
│   │   ├── modules/           # Бізнес-модулі
│   │   │   ├── user/          # Модуль користувачів
│   │   │   ├── game/          # Модуль ігор
│   │   │   ├── library/       # Модуль бібліотеки
│   │   │   ├── achievement/   # Модуль досягнень
│   │   │   ├── review/        # Модуль оглядів
│   │   │   ├── save/          # Модуль збережень
│   │   │   ├── friend/        # Модуль дружніх зв'язків
│   │   │   ├── tag/           # Модуль тегів
│   │   │   ├── dev/           # Модуль розробників
│   │   │   ├── event/         # Модуль подій
│   │   │   ├── game-news/     # Модуль новин ігор
│   │   │   ├── complex-queries/    # Складні транзакційні запити
│   │   │   └── analytical-queries/ # Аналітичні запити
│   │   └── prisma/
│   │       └── prisma.service.ts  # Сервіс для роботи з Prisma
│   ├── test/                   # Тестові файли
│   │   ├── integration/        # E2E тести
│   │   └── modular/            # Юніт-тести
│   ├── dist/                   # Скомпільований код (генерується)
│   └── package.json            # Залежності та скрипти
├── prisma/                     # Prisma схема та міграції
│   ├── schema.prisma          # Схема бази даних
│   └── migrations/            # Міграції бази даних
├── docs/                       # Документація
│   ├── README.md              # Головна документація (цей файл)
│   ├── schema.md              # Документація структури БД
│   ├── queries.md             # Документація запитів
│   └── CONTRIBUTIONS.md       # Інструкції для контриб'юторів
├── docker-compose.yml         # Конфігурація Docker Compose
├── Dockerfile                 # Docker образ для backend застосунку
├── .dockerignore              # Файли, які ігноруються при збірці Docker образу
└── package.json               # Кореневий package.json

```

### Організація модулів

Кожен модуль слідує стандартній структурі NestJS:

```
module-name/
├── module-name.controller.ts  # HTTP обробники (endpoints)
├── module-name.service.ts     # Бізнес-логіка
├── module-name.module.ts      # Конфігурація модуля
└── dto/                       # Data Transfer Objects
    ├── create-module-name.dto.ts
    └── update-module-name.dto.ts
```

### Особливі модулі

- **complex-queries**: Містить складні транзакційні операції (створення гри та гравця з усіма зв'язаними даними, покупка гри)
- **analytical-queries**: Містить аналітичні запити для бізнес-аналітики (популярність жанрів, регіональні продажі, статистика досягнень)

## Додаткова інформація

Для детальної інформації про структуру бази даних [schema.md](./schema.md)

Для інформації про складні запити [queries.md](./queries.md)


