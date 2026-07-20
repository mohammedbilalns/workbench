

const connection = {
  host: "localhost",
  post: 6379
}

const worker = new Worker('myQueue', async (job : any) => {
  console.log(`Processing Job ${job.id}`)
  console.log(`Job data: ${job.data}`)

  await new Promise(resolve => setTimeout(resolve, 2000))

  console.log(`Job ${job.id} completed`)
  return {result: "success"}
}, {connection})

worker.on("compl")


