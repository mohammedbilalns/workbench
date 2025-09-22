import {query} from '../db/db.js';

export async function getUsersWithPosts(){
	const getUsersWithPostsQuery = `
	SELECT users.id ,users.username, posts.title
	FROM users
	INNER JOIN posts ON users.id = posts.user_id 
	
`

		try{
		const res = await query(getUsersWithPostsQuery)
		return res.rows
	}catch(err){
		console.error(err)
	}

}

// retrive users even if there is no posts 
export async function  getAllUsersAndTheirPosts(){
	const getAllUsersQuery = `
	SELECT users.id, users.username, posts.title
	FROM users
	LEFT JOIN posts ON users.id = posts.user_id

`

		try {
			const result  = await query(getAllUsersQuery)
		return result.rows 
		} catch (error) {
			console.error(error)
		}
}
