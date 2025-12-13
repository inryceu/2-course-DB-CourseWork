import { Module, Global } from '@nestjs/common';
import { DatabaseConfigService } from './database-config.service';

@Global()
@Module({
  providers: [DatabaseConfigService],
  exports: [DatabaseConfigService],
})
export class DatabaseConfigModule {}
