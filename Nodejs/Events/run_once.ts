import {EventEmitter} from "node:events"

const appEvents = new EventEmitter()

type UserRegisteredEventPayload = {
  id: string
  email: string
}

appEvents.on("user:registered", (payload : UserRegisteredEventPayload) =>{
  console.log(`User registered with id ${payload.id} and email ${payload.email}`)
})

appEvents.on("user:registered", (payload : UserRegisteredEventPayload) =>{
  console.log(`sending mail to ${payload.email}`)
})

appEvents.once("user:registered", (payload : UserRegisteredEventPayload) =>{
  console.log("Listening only once ")
})

function registerUser(){
  const user = {
    id: "1234",
    email: "bilal@gmail.com"
  }

  console.log("user saved")

  appEvents.emit("user:registered", user)
  appEvents.emit("user:registered", user)
}


registerUser()
