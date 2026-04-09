# Lab 5 Analysis: Modular Monolith (Core + Analytics)

## 1. Lab 5 specific analysis

### 1.1. Why these boundaries were chosen
The domain already had transactional operations (users, libraries, achievements, purchases) and read-heavy analytical use cases.  
Therefore, boundaries were chosen by business behavior:
- **Core BC**: commands, transactional invariants, write-side state.
- **Analytics BC**: read-only projections and metrics for decision support.

This is not an artificial split by technical layers. It is a split by language and change rates:
- Core changes when business rules change.
- Analytics changes when reporting/metrics needs evolve.

### 1.2. Implemented modular structure
The bounded-context roots are:
- `server/src/contexts/core/`
- `server/src/contexts/analytics/`

Both contexts now expose explicit public contracts:
- Core API contract: `core/contracts/api/core-user-public-contract.ts`
- Core integration event contract: `core/contracts/events/user-registered.integration-event.ts`
- Analytics API contract: `analytics/contracts/api/analytics-public-contract.ts`

Analytics also has an internal model and repository abstraction:
- Internal model: `analytics/domain/models/analytics-user-registration.projection.ts`
- Projection repository contract: `analytics/application/contracts/analytics-user-registration-projection.repository.ts`
- Infrastructure implementation: `analytics/infrastructure/repositories/in-memory-analytics-user-registration-projection.repository.ts`

### 1.3. ACL and model protection
Inter-context translation is done in:
- `analytics/acl/mappers/core-user-registered-event-acl.mapper.ts`

ACL receives `UserRegisteredIntegrationEvent` from Core contract and maps it to `AnalyticsUserRegistrationProjection` (Analytics internal model).  
This prevents external event types from leaking into Analytics domain and application internals.

### 1.4. Integration events and eventual consistency
Core publishes:
- `UserRegisteredIntegrationEvent` (past tense, context-rich fields: userId, username, email, region, occurredAt)

Analytics subscribes asynchronously:
- `analytics/application/event-handlers/user-registered.integration-event-handler.ts`

Main business operation (`CreateUserCommandHandler`) completes without waiting for Analytics projection update.  
Analytics projection update runs asynchronously and may lag behind Core state.

### 1.5. Strong vs eventual consistency decisions
**Strong consistency (inside Core):**
- User creation and domain validation happen synchronously in Core command handling and repositories.
- Command response confirms transactional write completion in Core.

**Eventual consistency (between Core and Analytics):**
- Analytics projection is updated after integration event delivery.
- Analytics endpoint can temporarily return stale data.

**Why acceptable:**
- Analytics results are informational and do not affect transaction correctness.
- Business value favors decoupling and independent evolution of read models.

### 1.6. Alternatives considered
1. Direct analytics SQL on operational schema  
   Rejected: no BC isolation, no ACL, no event-driven flow.

2. Synchronous Core -> Analytics calls  
   Rejected: tight coupling and no eventual consistency demonstration.

3. Immediate microservice split  
   Rejected: too heavy for lab scope, deployment complexity not justified.

### 1.7. What would change if Analytics is extracted to separate service
- Keep current Core integration event contracts as schema baseline.
- Replace in-process CQRS event propagation with external broker.
- Store analytics projections in dedicated analytics DB.
- Keep ACL in Analytics service to map external messages to internal models.
- Add retry/idempotency strategy and dead-letter handling.

## 2. Full course retrospective (Lab 1 -> Lab 5)

### 2.1. Architectural evolution
- **Lab 1-2:** mostly CRUD-oriented API and relational modeling focus.
- **Lab 3:** deeper query modeling and analysis of SQL/ORM trade-offs.
- **Lab 4:** domain/application separation and event-driven concepts introduced.
- **Lab 5:** bounded contexts, contract-first integration, ACL, eventual consistency in modular monolith.

The system moved from a single code mass toward explicit architectural boundaries.

### 2.2. Most valuable decisions
1. Introducing explicit domain objects and use-cases for user flow.
2. Using CQRS/event bus patterns to separate command and query concerns.
3. Formalizing bounded contexts with public contracts.
4. Adding ACL to protect consumer model purity.

These decisions improved maintainability and reduced accidental coupling.

### 2.3. Trade-offs between simplicity and flexibility
**Simplicity gains (early labs):**
- Faster feature delivery with direct data access.

**Flexibility gains (later labs):**
- Context isolation enables safer long-term evolution.
- Event-driven read models support scaling and independent change.

**Costs paid:**
- More files, abstractions, and wiring.
- Harder onboarding without architecture documentation.

### 2.4. What I would do differently
1. Introduce BC contracts earlier to avoid migration refactor at Lab 5.
2. Add import boundary lint rules from the beginning.
3. Move Analytics projection storage to persistent DB table earlier (instead of in-memory).
4. Add contract and integration tests specifically for event schema/ACL mapping.

### 2.5. Honest assessment
The current solution demonstrates modular monolith principles, ACL, and eventual consistency in-process.  
Main remaining production-grade gap is projection persistence and stronger operational guarantees (idempotency/retries/observability), which would be addressed in the next iteration.
