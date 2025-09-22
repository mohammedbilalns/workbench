
const EventEmitter = require("node:events")

// const emitter = new EventEmitter()
//

// emiiter.on("order-pizza", (size, topping)=> {
//     console.log(`Order recieved! Baking a ${size} pizza with ${topping} O`)
// })
//
// emiiter.on("order-pizza", (size)=> {
//     if(size === "large"){
//         console.log("Serving complementery drink")
//     }
// })
// emiiter.emit("order-pizza", "large" , "mushroom")

// emitter.on("greet", (name)=>{
// 	console.log(`Hello ${name}`)
// })
//
//
// emitter.emit("greet","bilal")
//

class MyCustomEmitter extends EventEmitter{
	constructor(){
		super()
		this.greeting = 'Hello '
	}

	greet(name){
		this.emit('greeting', `${this.greeting}, ${name}`)
	}
}

const myCustomEmitter = new MyCustomEmitter()
myCustomEmitter.on("greeting", (input)=>{
	console.log("Greeting event", input)
})


myCustomEmitter.greet("Mohammed Bilal")

