import { Injectable } from '@nestjs/common';
import {
  AnalyticsUserRegistrationByRegionReadModel,
  IAnalyticsUserRegistrationProjectionRepository,
} from '../../application/contracts/analytics-user-registration-projection.repository';
import { AnalyticsUserRegistrationProjection } from '../../domain/models/analytics-user-registration.projection';

@Injectable()
export class InMemoryAnalyticsUserRegistrationProjectionRepository implements IAnalyticsUserRegistrationProjectionRepository {
  private readonly projections = new Map<
    number,
    AnalyticsUserRegistrationProjection
  >();

  async upsert(projection: AnalyticsUserRegistrationProjection): Promise<void> {
    this.projections.set(projection.userId, projection);
  }

  async getRegistrationsByRegion(): Promise<
    AnalyticsUserRegistrationByRegionReadModel[]
  > {
    const grouped = new Map<
      string,
      { totalRegisteredUsers: number; latestRegistrationAt: Date }
    >();

    for (const projection of this.projections.values()) {
      const current = grouped.get(projection.region);
      if (!current) {
        grouped.set(projection.region, {
          totalRegisteredUsers: 1,
          latestRegistrationAt: projection.occurredAt,
        });
        continue;
      }

      grouped.set(projection.region, {
        totalRegisteredUsers: current.totalRegisteredUsers + 1,
        latestRegistrationAt:
          current.latestRegistrationAt > projection.occurredAt
            ? current.latestRegistrationAt
            : projection.occurredAt,
      });
    }

    return [...grouped.entries()]
      .map(([region, stats]) => ({
        region,
        totalRegisteredUsers: stats.totalRegisteredUsers,
        latestRegistrationAt: stats.latestRegistrationAt.toISOString(),
      }))
      .sort((a, b) => b.totalRegisteredUsers - a.totalRegisteredUsers);
  }
}
