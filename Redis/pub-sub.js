import redis from "redis"


const client = redis.createClient({
	host: 'localhost',
	port:6379
})

// event listenter 
client.on('error', (error)=> console.log('Redis client error occured', error))

async function pubSub(){
	try{
		await client.connect()
		
		// const subscriber = client.duplicate() // create a new client sharing the same connection 
		// await subscriber.connect() // connect to redis server fro the subscriber 
		// await subscriber.subscribe('dummy-channel', (message, channel)=>{
		// 	console.log(`Recieved message from ${channel}: ${message}`)
		//
		// })
		//
		// // publish message to the dummy- channel 
		// await client.publish('dummy-channel', 'Some dyummy data from publisher')
		// await client.publish('dummy-channel', 'some new message  again from publisher')
		// await new Promise((resolve) => setTimeout(resolve, 1000))
		// await subscriber.quit() // close the subscriber connection 
		//

		//pipelining & transactions 
		
		const multi = client.multi()
		multi.set('key-transaction1', 'value1')
		multi.set('key-transaction2', 'value2')
		multi.get('key-transaction1')
		multi.get('key-transaction2')
		const results = await multi.exec()
		console.log(results)
		const pipeline = client.multi()
		multi.set('key-transaction1', 'value1')
		multi.set('key-transaction2', 'value2')
		multi.get('key-transaction1')
		multi.get('key-transaction2')
		const pipelineResults = await multi.exec()
		console.log(pipelineResults)
	}catch(err){
	console.error(err);
	
	}finally{
		client.quit()
	}
}

pubSub()
