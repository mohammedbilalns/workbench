const EventEmitter = require("events");

const pizzaEvent = new EventEmitter()

pizzaEvent.on("order-pizza", (size, topping)=>{
    console.log(`Ordered ${size} pizza with topping ${topping}`)
})


pizzaEvent.emit('order-pizza', 'large', 'mushroom')