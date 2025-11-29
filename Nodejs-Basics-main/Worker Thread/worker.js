
const { paretnPort} = require("worker_threads")

paretnPort.on('message', (jobs)=>{

  for (let job of jobs) {
    let count = 0;
    for (let i = 0; i < job; i++) {
        count++;
    }
  }

  paretnPort.postMessage('done')
})
