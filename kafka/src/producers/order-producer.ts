import { log } from "node:console";
import { kafka } from "../config/kafka.js";
import { ORDER_PLACED_TOPIC, OrderPlacedEvent } from "../events/order-placed.js";

const producer  = kafka.producer()

let orderNumber = 1 

function createOrderPlacedEvent() : OrderPlacedEvent {
  const userId = `user=${Math.ceil(Math.random() * 10)}`

  return {
    eventId : crypto.randomUUID(),
    eventType: 'ORDER_PLACED',
    orderId: `order- ${orderNumber++}`,
    userId,
    amount:Number((Math.random() * 500 + 500).toFixed(2)),
    createdAt: new Date().toISOString()
  }
}
async function main(){
  await producer.connect()// connection to the broker 
  log('Order produced connected')
  setInterval(async () => {
    const event = createOrderPlacedEvent() 

    await producer.send({
      topic: ORDER_PLACED_TOPIC,
      messages: [{
        key: event.userId,
        value: JSON.stringify(event)
      }]
    })

    console.log(`Produced ${event.eventType}`)
  },2000)
}

main().catch(async (error) => {
  console.error("Produced error : ", error)
  await producer.disconnect()
  process.exit(1)
})

process.on("SIGINT", async () => {
  await producer.disconnect()
  process.exit(1)
})
