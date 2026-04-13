import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsConsistencyPolicyService {
  getEventualConsistencyScope(): string {
    return 'Analytics projections are updated asynchronously from Core integration events and may lag behind Core state.';
  }
}
