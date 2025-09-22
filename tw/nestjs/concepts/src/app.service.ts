import { Injectable } from '@nestjs/common';

// buisiness logic 

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello Nestjs!';
  }
}


