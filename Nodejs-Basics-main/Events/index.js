 
const EventEmitter = require("node:events")

const emiiter = new EventEmitter()


emiiter.on("order-pizza", (size, topping)=> {
    console.log(`Order recieved! Baking a ${size} pizza with ${topping} O`)
})

emiiter.on("order-pizza", (size)=> {
    if(size === "large"){
        console.log("Serving complementery drink")
    }
})
emiiter.emit("order-pizza", "large" , "mushroom")