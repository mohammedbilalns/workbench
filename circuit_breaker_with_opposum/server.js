import Opossum from "opossum";

const fetchData = async() =>{
  if(Math.random() < 0.1){
    throw new Error("Simulated an error")
  }
  return {data: "Some data"}
}


const circuitBreaker  = new Opossum(fetchData, {
  timeout: 1000,
  errorThresholdPercentage: 20,
  fallback : () =>{
    console.warn("Circuit breaker tripped returning fallback")
    return {data : "Cached data .. "}
  }
}) 

async function getProtectedData(){
  try{
    return await circuitBreaker.fire()
  }catch(err){
    console.error("An unrecoverable error occured", err)
  }
}

(async () =>{
  for(let i=0 ; i< 10 ; i++){
    const data = await getProtectedData()
    console.log(`Request ${i +1} returned ${ JSON.stringify(data)}`)
  }
})()
