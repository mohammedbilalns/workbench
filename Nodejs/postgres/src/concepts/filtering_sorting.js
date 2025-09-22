import { query } from "../db/db.js";


export async function getUsersWhere(condition){
	const getUsersQuery = `
SELECT * FROM users
WHERE ${condition}

`

	try{
		const res = await query(getUsersQuery)
		console.log(res.rows)
		return res
	}catch(err){
		console.error(err)
	}
}


export async function getSortedUsers(column, order="ASC"){
	const getUsersQuery = `
SELECT * FROM users
ORDER BY ${column} ${order}
`

	try{
		const res = await query(getUsersQuery)
		console.log(res.rows)
		return res
	}catch(err){
		console.error(err)
	}

}


export async function getPaginatedUsers(page, limit){
	const getUsersQuery = `
SELECT * FROM users
LIMIT ${limit} OFFSET ${page}
`
	try{
		const res = await query(getUsersQuery)
		return res
	}catch(err){
		console.error(err)
	}
}
