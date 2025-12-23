import redis from "redis"

export const client = redis.createClient(({
  host: "localhost",
  port: 6379
}))


client.on('error', (error) => {
  console.log(`Redis client error ocured: `, error)
})


async function testConnection(){
  try {
    
    await client.connect()
    console.log(`Redis connected`)

    await client.set("name", "value")

    const extractedValue = await client.get("name")
    console.log(extractedValue)

    const deleteCount = await client.del("name")
    console.log(deleteCount)

    const extractUpdatedValue = await client.get("name")
    console.log(extractUpdatedValue)

    await client.set("count", 100)

    const incrementCount = await  client.incr("count")
    const decrementCount = await client.decr("count")


  } catch (error) {
    console.log("error connecting to redis", error)
    
  }finally{
    await client.quit()
  }
}

