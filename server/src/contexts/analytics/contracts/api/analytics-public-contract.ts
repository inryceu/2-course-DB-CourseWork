export interface AnalyticsRegistrationsByRegionDto {
  region: string;
  totalRegisteredUsers: number;
  latestRegistrationAt: string;
}

export interface IAnalyticsPublicContract {
  getUserRegistrationsByRegion(): Promise<AnalyticsRegistrationsByRegionDto[]>;
}

export const ANALYTICS_PUBLIC_CONTRACT_TOKEN = Symbol(
  'ANALYTICS_PUBLIC_CONTRACT_TOKEN',
);
