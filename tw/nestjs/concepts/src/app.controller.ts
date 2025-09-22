import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
 // Appservice is injected through the constructor 
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
	// using the injected service to get the getHello method 
    return this.appService.getHello();
  }
}
