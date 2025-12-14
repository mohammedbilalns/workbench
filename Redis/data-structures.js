import {createClient} from "redis"


const client = createClient({
	url:"redis://localhost:6379"
})

// event listenter 
client.on('error', (error)=> console.log('Redis client error occured', error))

async function redisDataStructures(){
	try{
		await client.connect()
		
		// await client.set("user:name", "bilalnsmuhammed")
		// const name =  await client.get("user:name")
		// console.log(name)
		// await client.mSet(["user:email", "bilalnsmuhammed@gmail.com", "user.age", "60", "user.country" , "india"]) // set multipele key value pairs 
		// const [email, age, country] = await client.mGet(["user:email", "user.age","user.country"])
		// console.log(email, age , country)
		//
		// // await client.lPush('notes', ['note 1 ', 'note 2', 'note 3'])
		// const notes = await client.lRange("notes",0,-1)
		// console.log(notes)
		// const firstNote = await client.lPop("notes")
		// console.log(firstNote)
		// const remaining = await client.lRange("notes", 0,-1)
		// console.log(remaining)
 	
		// await client.sAdd('user:nickname', ['john', 'bilal', 'varun', 'xyz'])
		// const nicknames = await client.sMembers("user:nickname")
		// console.log(nicknames)
		// const isVarunNickname = await client.sIsMember("user:nickname", "varun")
		// console.log(isVarunNickname)
		// await client.sRem("user:nickname", "xyz")
		// const rem = await client.sMembers("user:nickname")
		// console.log(rem)
		
		// await client.zAdd('cart', [{score:100, value : "cart 1"}, {score:50 , value:"Cart 2"}, {score:23, value:"Cart 3"}])
		// const topItems = await client.zRange('cart',0,-1)
		// console.log(topItems)
		// const allitems  = await client.zRangeWithScores('cart',0,-1)
		// console.log(allitems)
		// const itemRanl = await client.zRank('cart','cart 1' )
		// console.log(itemRanl)
		

		// await client.hSet('product:1', {name:'Product 1', description:'product 1 description', rating: 5})
		// const getProductRating = await client.hGet('product:1', 'rating')
		// console.log(getProductRating)
		// const productDetails =  await client.hGetAll('product:1')
		// console.log(productDetails)
		// await client.hDel('product:1', 'rating')
		//
	}catch(err){
		console.error(err);
		
	}finally{
		client.quit()
	}

}

redisDataStructures()
