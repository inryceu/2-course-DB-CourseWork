import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { UserModule } from '../../modules/user/user.module';
import { CORE_USER_PUBLIC_CONTRACT_TOKEN } from './contracts/api/core-user-public-contract';
import { CoreUserPublicContractService } from './application/services/core-user-public-contract.service';
import { CoreConsistencyPolicyService } from './domain/services/core-consistency-policy.service';

@Module({
  imports: [CqrsModule, UserModule],
  providers: [
    CoreUserPublicContractService,
    CoreConsistencyPolicyService,
    {
      provide: CORE_USER_PUBLIC_CONTRACT_TOKEN,
      useExisting: CoreUserPublicContractService,
    },
  ],
  exports: [CORE_USER_PUBLIC_CONTRACT_TOKEN],
})
export class CoreContextModule {}
