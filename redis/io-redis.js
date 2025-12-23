import Redis from "ioredis"

const redis = new Redis() 



async function ioRedisDemo(){
  try {
    await redis.set("key", "value")
    const val  = await redis.get("key")
    
  } catch (err) {
    console.error(err)
    
  }finally{
    redis.quit()
  }
}

ioRedisDemo()
