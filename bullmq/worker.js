import {Worker} from "bullmq"
import IORedis from "ioredis"

const connection = new IORedis({maxRetriesPerRequest : null})


const worker = new Worker(
  "foo", 
  async job => {
    console.log(job.data)
  },
  {connection}
)

worker.on("completed", job => {
  console.log(`Completed work `)
})

worker.on('failed', (job, err)=> {
  console.log(`work failed`)
})
