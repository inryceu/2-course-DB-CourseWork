# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands that will be commonly used

### Development commands

```bash
# Build the project (compiles TypeScript)
npm run build

# Start development server with hot reload
npm run start:dev

# Start production server
npm run start:prod

# Format code with Prettier
npm run format

# Lint and fix TypeScript code
npm run lint
```

### Testing commands

```bash
# Run all tests (unit + e2e)
npm test

# Run unit tests only
npm run test:unit

# Run end-to-end integration tests
npm run test:e2e

# Watch mode for unit tests
npm run test:watch
```

### Database commands

```bash
# Generate Prisma client from schema
npm run prisma:generate
```

## High-level code architecture and structure

### Project Structure Overview

```
src/
├── app.module.ts              # Root module with global configuration
├── main.ts                    # Application entry point
└── contexts/                  # CQRS context layers (separation of concerns)
    ├── application/           # Use cases, commands, queries, handlers
    ├── domain/                # Domain models and business logic
    ├── infrastructure/       # External dependencies (DB, cache, etc.)
    └── presentation/          # Controllers, DTOs, projections
```

### Context Layer Responsibilities

1. **Application Layer** (`src/contexts/*/application/`)
   - Use cases: business logic orchestration
   - Commands & Queries: domain operations
   - Handlers: implement command/query handling
   - Services: application-level services (e.g., `analytics-public-contract.service.ts`)

2. **Domain Layer** (`src/contexts/*/domain/`)
   - Entities, Value Objects, Projections: core domain models
   - Domain Services: business logic not tied to entities
   - Repository interfaces: abstract data access contracts

3. **Infrastructure Layer** (`src/contexts/*/infrastructure/`)
   - Prisma clients and repositories: database persistence
   - External service integrations (email, SMS, etc.)
   - No domain knowledge — pure technical concerns

4. **Presentation Layer** (`src/contexts/*/presentation/`)
   - Controllers: HTTP endpoints
   - DTOs: request/response serialization
   - Projections: read models for queries

### CQRS Pattern Implementation

- Each "context" represents a bounded context (e.g., `analytics`, `core`, `game`)
- Commands flow from Presentation → Application → Domain → Infrastructure
- Queries bypass application layer, reading directly from domain/projection layers
- Separation allows independent scaling and evolution of write/read paths

### Database Architecture

- Uses PostgreSQL with Prisma ORM (`@prisma/client` v6.x)
- Schema located at `../prisma/schema.prisma`
- Multiple schemas per context for isolation (e.g., `kpi`, `kpi_test`)
- Transaction support via `$transaction()` method

### Authentication & Authorization

- Password hashing: bcrypt
- JWT tokens for stateless authentication
- Role-based access control implemented in contexts

### Environment Configuration

```env
DATABASE_URL="postgresql://postgres:password@localhost:5432/kpi?schema=public"
DATABASE_URL_TEST="postgresql://postgres:password@localhost:5432/kpi_test?..."
```

- Test database uses separate schema to avoid polluting production data
- `global-setup.ts` handles environment configuration for tests

### NestJS Configuration

- Version 11.x with CQRS module (`@nestjs/cqrs`)
- Swagger/OpenAPI documentation via `@nestjs/swagger`
- Config module for external configuration loading
- TypeORM/Prisma integration through dependency injection

## Key Files to Reference

| File | Purpose |
|------|--------|
| `src/app.module.ts` | Root module with global providers and configuration |
| `src/contexts/core/application/use-cases/create-user.use-case.ts` | User creation business logic |
| `src/prisma/schema.prisma` | Database schema definition |
| `test/integration/global-setup.ts` | Test environment setup |

## NestJS v11 Notes

- Prisma Service injection requires passing PrismaClient instance: `moduleFixture.get<PrismaService>(prismaClient)`
- Transaction options use named property: `{ isolationLevel: 'READ_COMMITTED' }` instead of `{ readCommitted: true }`
- Module fixtures follow updated dependency injection patterns

## Common Development Tasks

1. **Add new endpoint**: Create controller in `presentation/`, command/query in `application/`, handler in `application/`
2. **Add database migration**: Use Prisma CLI (`prisma migrate dev`)
3. **Run tests against real database**: Set `DATABASE_URL_TEST` environment variable
4. **Debug transactions**: Check isolation level and lock behavior in PostgreSQL logs