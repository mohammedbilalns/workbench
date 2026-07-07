import { ORDER_PLACED_TOPIC } from "../events/order-placed.js";
import { kafka } from "./kafka.js";


const admin = kafka.admin()

async function main(){
  await admin.connect()


  await admin.createTopics({
    topics: [
      {
        topic: ORDER_PLACED_TOPIC,
        numPartitions: 3,
        replicationFactor : 1 
      }
    ]
  })

  console.log(`Created topic: ${ORDER_PLACED_TOPIC}`)
}

main().catch(async(error) =>{
  console.log("topic creation error : ", error)
  await admin.disconnect()
  process.exit(1)
} )
