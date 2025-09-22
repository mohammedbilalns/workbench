import express from "express"
import redis from "redis"


const client = redis.createClient({
	host: 'localhost',
	port:6379
})

// event listenter 
client.on('error', (error)=> console.log('Redis client error occured', error))

async function testRedisConnection(){
	try{
		await client.connect() 
		console.log("Connected to redis")
		await client.set("name", "bilal")
		const extractedValue = await client.get("name")
		console.log(extractedValue)
		const deleteCount =  await client.del("name")
		console.log(deleteCount)
		const extractedVal = await client.get("name")
		console.log(extractedVal)
		await client.set('count', '100')
		const incrementCount = await client.incr('count')
		console.log(incrementCount)
		const decrementCount = await client.decr('count')
		console.log(decrementCount)
	}catch(err){
		console.error("Redis connection error", err);
		
	}finally{
		await client.quit()
	}
}

testRedisConnection()
