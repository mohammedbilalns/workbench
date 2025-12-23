import redis from "redis"

export const client = redis.createClient(({
  host: "localhost",
  port: 6379
}))


client.on('error', (error) => {
  console.log(`Redis client error ocured: `, error)
})


async function testPubSub(){
  try {
    await client.connect()

    const subscriber = client.duplicate() // create a client sharing the same connecton 
    await subscriber.connect() // connect subscriber to the redis server

    await subscriber.subscribe("dummy-channel", (message ,channel) =>{
      console.log(`recievd message from ${channel}: ${message}`)
    }) // subscribe to a channel 

    await client.publish("dummy-chanel", "some data from the publisher")

    await client.publish("dummy-channel", "another data from the publisher")


    await new Promise((resolve) => setTimeout(resolve, 1000))

    // unsubscribe and close the connection 
    await subscriber.unsubscribe("dummy-channel")
    await subscriber.close()

    // Pipelings  & transactions 
    
    const multi  = client.multi()
    multi.set("key-transaction1", "value1")
    multi.set("key-transaction2", 'value2')
    multi.get('key-transaction1')
    multi.get('key-transaction2')

    const results = await multi.execAsPipeline()
    console.log(results)

  } catch (error) {
    console.error(error)

  }finally{ 
    client.close()
  }
}



testPubSub()


