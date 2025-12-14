import {EventEmitter} from "node:events"

class PizzaShop extends EventEmitter  {
    constructor(){
        super()
        this.orderNumber = 0 
    }

    order(size , topping){
        this.orderNumber++
        this.emit("order", size , topping)
    }

    displayOrderNUmber(){
        console.log(`Current order number: ${this.orderNumber}`)
    }
}

export default PizzaShop
