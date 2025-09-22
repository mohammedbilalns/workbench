
// enables the use of threads that execute javascript in parallel 
// useful for performing cpu intensive javascript operatiosn. They do not help much with i/o intensive work.
// unlike the child_processes worker_threads can share memory. They do so by transferring arraybuffer instances or sharing sharedAraryBuffer instances 
import { Worker } from "node:worker_threads"
import os from "node:os"

function checkPrimeAsync(number) {
  console.log(`Main thread PID: ${process.pid} - CPUs: ${os.cpus().length}`);

  return new Promise((res, rej) => {
    const worker = new Worker('./isPrime.js', { workerData: number })
    console.log(`Spawned worker with thread ID: ${worker.threadId} and PID: ${worker.pid}`);

    worker.on('message', res)
    worker.on('error', rej)
    worker.on('exit', code => {
      if (code !== 0) rej(new Error(`Worker stopped with exit code ${code}`))
    })
  })
}

(async () => {
  const isPrime = await checkPrimeAsync(19993241123)
  console.log('Numer is prime: ', isPrime)
})()
