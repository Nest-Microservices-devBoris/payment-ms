import { Controller, Get } from '@nestjs/common';

@Controller('/')
export class HealthCheckController {


    @Get()
    getHealthCheck() {
        return 'payment webhook is up and running';
    }
}
