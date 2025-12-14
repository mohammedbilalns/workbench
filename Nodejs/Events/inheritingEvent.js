import {EventEmitter} from "node:events"


class Greeter extends EventEmitter{

  constructor(greeting = "Hello"){
    super()
    this.greeting = greeting
  }

  greet(name){
    this.emit("greeting", `${this.greeting}, ${name} `)
  }
}

const greeterInstance = new Greeter()

greeterInstance.on("greeting", (greetingString)=>{
  console.log(greetingString)
})


greeterInstance.greet("bilal")
