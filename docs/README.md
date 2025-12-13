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
- **Docker Compose** — для контейнеризації та запуску сервісів
- **Swagger** — автоматична генерація документації API
- **bcrypt** — хешування паролів
- **class-validator** та **class-transformer** — валідація та трансформація даних

## Інструкції з налаштування

### 1. Клонування репозиторію

```bash
git clone <https://github.com/inryceu/2-course-DB-CourseWork.git>
cd <2-course-DB-CourseWork>
npm install
```

### 2. Запуск сервісів

```bash
docker-compose up -d
```

Це запустить PostgreSQL контейнер з такими параметрами за замовчуванням:
- Порт: 13947 (або значення з `POSTGRES_PORT`)
- Користувач: postgres
- База даних: railway

`.env` файл змінних середовища у корені проєкту:

```env
POSTGRES_USER=postgres
POSTGRES_PASSWORD=your_password
POSTGRES_DB=railway
POSTGRES_PORT=13947
DATABASE_URL=postgresql://postgres:your_password@localhost:13947/railway
DATABASE_URL_TEST=postgresql://postgres:your_password@localhost:13947/railway_test
```

### 3. Встановлення залежностей

```bash
cd server
npm install
```

### 4. Налаштування бази даних

```bash
npm run prisma:generate
npm run prisma:migrate
```

## Запуск додатку

### Режим розробки

```bash
cd server
npm run start:dev
```

Застосунок буде доступний за адресою `http://localhost:3000`

### Режим продакшн

```bash
npm run build
npm run start:prod
```

### Режим відлагодження

```bash
npm run start:debug
```

## Документація API

Після запуску додатку Swagger документація доступна за адресою:

- **[Swagger UI](https://2-course-db-coursework-production.up.railway.app/api)**: http://localhost:3000/api
- **[JSON схема](https://2-course-db-coursework-production.up.railway.app/api-json)**: http://localhost:3000/api-json

## Запуск тестів

### Запуск всіх тестів

```bash
cd server
npm test
```

### Запуск юніт-тестів

```bash
npm run test:unit
```

### Запуск e2e тестів

**Важливо:** Перед запуском e2e тестів переконайтесь, що `DATABASE_URL_TEST` встановлено та вказує на тестову базу даних, щоб уникнути видалення даних з продакшн бази (правила написані кров'ю, u know...).

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


