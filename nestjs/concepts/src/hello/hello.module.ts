import { Module } from '@nestjs/common';
import { HelloController } from './hello.controller';
import { HelloService } from './hello.service';

// Modules encapsulates controllers and services for a module 

@Module({
  controllers: [HelloController], 
  providers: [HelloService],
  imports: [], // import other modules if needed 
  exports: [HelloService] // export service so that it is accessible through out the app 

})
export class HelloModule {}
