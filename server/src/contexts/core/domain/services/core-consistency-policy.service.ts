import { Injectable } from '@nestjs/common';

@Injectable()
export class CoreConsistencyPolicyService {
  getStrongConsistencyScope(): string {
    return 'Core command handlers and repositories execute business invariants synchronously inside Core bounded context.';
  }
}
