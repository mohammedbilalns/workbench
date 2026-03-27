import { Queue } from "bullmq"; 

const myQue = new Queue("foo")

async function addJobs(){
  await myQue.add("myJobname", {foo: 'bar'})
  await myQue.add("myJobName", {foo: 'baz'})
}

await addJobs()
