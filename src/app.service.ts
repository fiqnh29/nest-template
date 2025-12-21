import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHealth() {
    return {
      service: 'nest-template-api',
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
  getHello(): string {
    return `Welcome to Nest Template API || Running in ${process.env.MODE} mode`;
  }
}
