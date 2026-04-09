# ADR 0001: Core + Analytics bounded contexts in Modular Monolith

## Status
Accepted

## Context
Laboratory Work 5 requires a modular monolith with at least two bounded contexts:
- `Core` for transactional business logic from previous labs.
- `Analytics` for read-only analytical models updated from Core only through integration events.

The previous structure was feature-oriented Nest modules with direct database analytics queries over operational tables.

## Decision
We introduced two explicit bounded contexts under `server/src/contexts`:
- `core/` with `domain/`, `application/`, `contracts/`.
- `analytics/` with `domain/`, `application/`, `infrastructure/`, `presentation/`, `acl/`, `contracts/`.

### Public contracts
- Core exposes:
  - `core/contracts/api/core-user-public-contract.ts`
  - `core/contracts/events/user-registered.integration-event.ts`
- Analytics exposes:
  - `analytics/contracts/api/analytics-public-contract.ts`

Only contract types are intended for inter-context integration.

### ACL
Analytics uses ACL mapper:
- `analytics/acl/mappers/core-user-registered-event-acl.mapper.ts`

It translates Core integration event into internal Analytics projection model:
- `analytics/domain/models/analytics-user-registration.projection.ts`

External models are not used beyond ACL mapping boundary.

### Consistency split
- Strong consistency: inside Core command execution (domain invariants, repository writes).
- Eventual consistency: Core -> Analytics projection updates through asynchronous event handling (`setTimeout` + non-blocking handler), so analytics may lag behind transactional state.

This split is acceptable because analytical read models are non-critical for immediate transactional correctness.

## Alternatives considered
1. Keep direct SQL/Prisma analytics over operational schema.
   - Rejected: violates bounded context separation, ACL, and event-driven integration.
2. Synchronous call from Core to Analytics service.
   - Rejected: creates tight coupling and removes eventual consistency behavior.
3. Extract Analytics into separate microservice now.
   - Rejected for lab scope; modular monolith chosen to preserve deployment simplicity.

## Consequences
### Positive
- Explicit context boundaries and contracts.
- Decoupled analytical model evolution.
- Clear demonstration of strong vs eventual consistency.

### Negative
- In-memory analytics projection is process-local and non-persistent.
- Additional architectural complexity versus direct queries.

## If extracting Analytics into separate service
- Keep current contracts as message schema baseline.
- Replace in-process event bus transport with broker (e.g., RabbitMQ/Kafka).
- Persist analytics projections in dedicated analytics database.
- Reuse existing ACL mapping logic in consumer service.
