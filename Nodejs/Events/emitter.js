import {EventEmitter } from "node:events"

const emitter = new EventEmitter()

emitter.on("greet",(name)=>{
  console.log(`Hello ${name}`)
}) 

emitter.emit("greet", "Bilal")
