import os from "node:os";

const {hostname,loadavg, uptime,freemem } = os 
console.log(hostname()) // arch linux 
console.log(loadavg()) // ? 
console.log(uptime()) // uptime in seconds

const freeMemory = freemem() // available memory in bytes
const totalMemory = os.totalmem() // total system memory in bytes
const availableMemoryPercentage = (freeMemory / totalMemory) * 100
console.log(`${availableMemoryPercentage}% of memory is available`)

const cpusInfo = os.cpus() // array of cpu info
console.log(cpusInfo)
const availableParallelism = os.availableParallelism()
console.log(availableParallelism)
console.log(os.networkInterfaces())
console.log(os.devNull)

