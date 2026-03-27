import pLimit from "p-limit"

const lmlit = pLimit(5)
const count = 1 

function returnPromise(){
  return new Promise((res, rej) => {
    console.log("Running...", count++)
  })
}

function returnPromiseArr(count){
  const arr = []
  for(let i=0 ; i< count ; i++){
    arr.push(returnPromise())

  }

  return arr 
}

await Promise.all(returnPromiseArr())
