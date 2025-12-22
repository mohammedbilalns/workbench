import { Controller, Get, Param, Query } from '@nestjs/common';
import { HelloService } from './hello.service';


@Controller('hello')
export class HelloController {

  constructor(private readonly helloService: HelloService){}

  @Get('first-route')
  getHello(): string{
    return this.helloService.getHello()
  }

  // path param user 
  @Get('user/:name')
  getHelloWithName(@Param('name') name: string): string {
    return this.helloService.getHelloWithName(name)
  }

  // query parameter name 
  @Get("query")
  getHelloWithQuery(@Query('name') name: string): string {
    return this.helloService.getHelloWithName(name)
  }

}
