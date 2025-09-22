import { query } from "../db/db.js"


export async function createUsersTable(){
	const createTableQuery = `
	CREATE TABLE IF NOT EXISTS users(
	id SERIAL PRIMARY KEY, 
	username VARCHAR(50) UNIQUE NOT NULL,
	email VARCHAR(255) UNIQUE NOT NULL,
	created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
)

`

	try{
		await query(createTableQuery)
		console.log('Users table created successfully')
	}catch(err){
		console.error('Erro while creating table', err);
		
	}
}


export async function insertUser(username, email){
	const insertUserQuery = `

	INSERT INTO users (username, email)
	VALUES ($1 , $2)
	RETURNING * 
`
	try{
		const res = await query(insertUserQuery, [username, email])
		console.log('User inserted successfully', res.rows[0])

		return res.rows[0]
	}catch(err){
		console.error("Error while creating user table ", err)

	}

}

export async function fetchAllUsers(){
	const getAllusersFromDb = `SELECT * FROM USERS`
	try{

			const res = await query(getAllusersFromDb)
		console.log(res.rows)
		return res
	}catch(er){
		console.error(err)
	}
}


export async function updateUser(username, newEmail){
	const updateUserQuery = `
	UPDATE users
	SET email = $2 
	WHERE username = $1
	RETURNING *
	`


	try{
		const res = await query(updateUserQuery, [username, newEmail])
		if(res.rows.length >  0){
			console.log('User updated successfully')
			return res.rows[0]

		}else{
			console.error('User not found')
			return null
		}
	}catch(err){
		console.error("Error while updating user ", err)
	}
}


export async function deleteUser(username){
	const deleteUserQuery = `
	DELETE FROM users
	WHERE username = $1
	RETURNING *

`

		try{
			const res = await query(deleteUserQuery, [username])
			if(res.rows.length > 0){
				console.log('User deleted successfully')
				return res.rows[0]
			}else{
				console.error('User not found')
				return null
			}	

	}catch(err){
		console.error("Error while deleting user ", err)
	}
}
