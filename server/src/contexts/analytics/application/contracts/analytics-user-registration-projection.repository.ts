import { AnalyticsUserRegistrationProjection } from '../../domain/models/analytics-user-registration.projection';

export interface AnalyticsUserRegistrationByRegionReadModel {
  region: string;
  totalRegisteredUsers: number;
  latestRegistrationAt: string;
}

export interface IAnalyticsUserRegistrationProjectionRepository {
  upsert(projection: AnalyticsUserRegistrationProjection): Promise<void>;
  getRegistrationsByRegion(): Promise<AnalyticsUserRegistrationByRegionReadModel[]>;
}

export const ANALYTICS_USER_REGISTRATION_PROJECTION_REPOSITORY_TOKEN = Symbol(
  'ANALYTICS_USER_REGISTRATION_PROJECTION_REPOSITORY_TOKEN',
);
