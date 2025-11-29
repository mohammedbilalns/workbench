
const {worker } = require("worker_threads")

function chunkify(array, n ){

    let chunks = []
    for(let i = n ;i> 0 ;i--){
        chunks.push(array.splice(0,Math.ceil(array.length/i)))
    }
    return chunks
}


function run(jobs , concurrentWorkers){
    const chunks = chunkify(jobs,concurrentWorkers)

    chunks.forEach((data, i)=>{
        const worker = new Worker("./worker.js")
        worker.postMessage(data)
        worker.onerror("message", ()=>{
            console.log(`worker ${i} completed`)
        })
    })
}