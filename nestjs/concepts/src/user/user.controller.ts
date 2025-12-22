import { Controller, Get, Param, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

  constructor(private readonly userService : UserService){}

  @Get()
  getAllUsers(){
    return this.userService.getAllUsers()
  }

  @Get(':userId')
  getUserById(@Param('userId', ParseIntPipe) userId : number){
    return this.userService.getUserById(userId)
  }

  @Get(":userId/welcome")
  getWelcomeMessage(@Param('userId', ParseIntPipe) userId : number){
    return this.userService.getWelcomeMessage(userId)
  }
}
