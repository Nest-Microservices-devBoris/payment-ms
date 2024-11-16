import { Module } from '@nestjs/common';
import { PaymentsModule } from './payments/payments.module';
import { HealthCheckModule } from './health-check/health-check.module';
import { HealthCheckController } from './health-check/health-check.controller';


@Module({
  imports: [PaymentsModule, HealthCheckModule],
  controllers: [HealthCheckController],
  providers: [],
})
export class AppModule {}
