import redis from "redis"

export const client = redis.createClient(({
  host: "localhost",
  port: 6379
}))


client.on('error', (error) => {
  console.log(`Redis client error ocured: `, error)
})

async function redisDS(){
  try {

    await client.connect()

    await client.set("user.name", "Alice") // set key value pairs 
    const name = await client.get("user.name") // retrive value with key 

    await client.mSet({
      "user.email": "user@gmail.com",
      "user.age": "60",
      "user.country":"India"}) // save multiple key value pairs together 

    const [email, age, country] = await client.mGet(["user.email", "user.age", "user.country"]) 
    console.log(email, age, country)

    // Lists 
    await client.lPush("notes", ["note 1 ", "note 2"]) // push to the left of the list
    const extractAllNotes = await client.lRange('notes', 0,-1) // retrive a range from a list 
    console.log(extractAllNotes)

    const firstNote  = await client.lPop("notes") // remove from the left 
    console.log(firstNote)

    // sets  - sadd , smembers , sismember , srem 
    await client.sAdd("user.nickname", ["john", 'alice', 'bob'])
    const extractedNicknames = await client.sMembers("user.nickname") // retrive all data from the set

    const isJohnIn = await client.sIsMember("user.nickname", "john") // check an element is in set 

    await client.sRem("user.nickname", "xyz") // remove an entry from the set 

    // sorted sets - zadd , zrange , zrank , zrem 

    await client.zAdd("cart", [
      { score:100 , value: "cart 1" },
      {score:32, value:"Cart 2 "}
    ]) // add elements to the sorted sets 
    
    const topItems = await client.zRange("cart", 0,-1) // retrive orderd items o
    const extractedWithScore  = await client.zRangeWithScores("cart",0 ,-1) // retrive vaules with their score 
    console.log(extractedWithScore)


    const cartToRank = await client.zRank("cart", "Cart 2") // retrive the rank of an item

    // hashes  - hset , hget , hgetall , hdel 
    

    await client.hSet("product:1", {
      name:"prouct  1",
      description:"fnsdl fsf",
      rating:43
    }) /// set value in hash set 

    const productRating = await client.hGet("product:1", "rating") // retrive a value from the hash 
    const productDEtails = await client.hGetAll("product:1")

    await client.hDel("product:1", "rating") // remove a value from the hash set


  } catch (error) {
    console.error(error)

  }finally{
    client.quit()
  }

}
redisDS()
