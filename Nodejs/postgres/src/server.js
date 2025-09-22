import { Result } from "pg";
import { createUsersTable, deleteUser, fetchAllUsers, insertUser, updateUser } from "./concepts/basic-queries.js";
import { getPaginatedUsers, getSortedUsers, getUsersWhere } from "./concepts/filtering_sorting.js";
import { createPostsTable, insertNewPost } from "./concepts/relationship.js";
import { getAllUsersAndTheirPosts, getUsersWithPosts } from "./concepts/joins.js";
import { countPostsByUser } from "./concepts/aggregation.js";

async function testBasicQueries(){
	try{
		// await createUsersTable()
	// insertUser("bilal", "bilalnsmuhammed@gmail.com")
	// insertUser("fsdfsd", "fsdnfsdn@gmail.com")
	//    const allUsers = await fetchAllUsers()
	// console.log(allUsers)
		// const updatedUser = await updateUser("bilal","bilal@gmail.com")
		// console.log(updatedUser)
		const deletedUser = await deleteUser("bilal")
		console.log(deletedUser)
	}catch(err){
		console.error(err)
		throw new err 
	}
}

async function testFilteringSorting(){
	try{
		// const fFilteredUsers = await getUsersWhere("username LIKE '%f%'")
		// console.log(fFilteredUsers)
		// const Result = await getSortedUsers("created_at", "DESC")
		// console.log(Result)
		const paginatedUsers = await getPaginatedUsers(2,10)
		console.log(paginatedUsers)
	}catch(err){
		console.error(err)
		throw new err 
	}
}

async function testRelations(){
	try{
		// await createPostsTable() 
		await insertNewPost("Second post", "This is my second post ",2)
	}catch(err){
		console.error(err)
		throw new err 
	}
}

async function testJoinQeuries(){
	try{
		const users = await getAllUsersAndTheirPosts()
		console.log(users)
	}catch(err){
		console.error(err)
	}
}

async function testAggregation(){
	try {
		const postCount = await  countPostsByUser()
		console.log(postCount)
	} catch (err) {
		console.error(err)	
	}
}
async function testAllQueries(){
	// await testBasicQueries(); 
	// testRelations()
	// testJoinQeuries()
	testAggregation()
}



testAllQueries()
