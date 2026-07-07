import { kafka } from "../config/kafka.js";
import { ORDER_PLACED_TOPIC, OrderPlacedEvent } from "../events/order-placed.js";

const consumer = kafka.consumer({
  groupId: "notificaiton-group",
})

async function main(){
  await consumer.connect()
  console.log("Notification consumer connectd")

  await consumer.subscribe({
    topic: ORDER_PLACED_TOPIC,
    fromBeginning : true 
  })

  await consumer.run({
    eachMessage: async ({ partition, message}) => {
      const event  = JSON.parse(message.value?.toString() ?? "{}")
      console.log(`notificatino | partition=${partition} offset= ${message.offset}`)
      console.log(`send mail to ${event.email}`)
    }
  })
}

main().catch(async (error) => {
  console.error("consumer error:", error)
  await consumer.disconnect()
})
