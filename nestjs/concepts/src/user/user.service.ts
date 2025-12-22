import { Injectable } from '@nestjs/common';
import { HelloService } from 'src/hello/hello.service';

@Injectable()
export class UserService {

  constructor(private readonly helloService: HelloService){}

   getAllUsers(){
    return [
      {id: 1 , name : "Bilal"},
      {id: 2, name : "Alice"},
      {id: 3, name : "Bob"}
    ] 
  }

  getUserById(id: number){
    const user = this.getAllUsers().find(user => user.id == id )
    return user 
  }

  getWelcomeMessage(userId : number){

    const user = this.getUserById(userId)
    if(!user) return "User not found"
    return this.helloService.getHelloWithName(user?.name)
      
  }
}
