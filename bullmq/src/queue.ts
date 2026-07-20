import { Queue } from "bullmq"


const connection = {
  host: 'localhost',
  port: 6379
}

const myQueue = new Queue('myQueue', {connection})

type Job1Payload = {
  foo: string 
}
async function addJob1Tasks(payload: Job1Payload){

  const job = await myQueue.add("job1",
    payload
    ,
    {
      attempts: 3,
      backoff: {type: "exponential", delay: 1000}
    }
  )

  console.log(`Job added with ID: ${job.id}`)

}

async function addTasks(){
  const payload1 = {
    foo: "fsdfdsfdsfdsf"
  }

  const payload2 = {
    foo : "fsdf sdfdsfdsf"
  }

  await addJob1Tasks(payload1)
  await addJob1Tasks(payload2)
}

addTasks()
  .catch(err => console.log(`Error: ${err}`))
  .finally(() => myQueue.close())

