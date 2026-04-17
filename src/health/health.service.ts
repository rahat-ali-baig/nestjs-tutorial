import { Injectable } from '@nestjs/common';

@Injectable()
export class HealthService {
    getHealthStatus(): Object {
        return { status: 'ok' , message: 'Health check successful' };
    }
}
