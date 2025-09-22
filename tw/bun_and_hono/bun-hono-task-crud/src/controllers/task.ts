import type { Context } from "hono";
import type {Database} from "bun:sqlite"
import { Task } from "../types";

export async function createTask(c:Context, db:Database){
	
	const userId = c.get('jwtPayload').user_id
	const userRole = c.get('jwtPayload').role
	const {title, description , user_id} =  await c.req.json()

	if(!userId){
		return c.json({message:'You are not authenticated'}, 401)
	}
	if(userRole !== 'admin'){
		return c.json({message:'You are not authorized to create a task'}, 401)
	}

	if(userId !== user_id){
		return c.json({message:'You are not authorized to create a task'}, 401)
	}

	try {
		const result = db.query(`
	INSERT INTO tasks (user_id, title, description)
	VALUES (?, ?, ?)
    RETURNING *
`).get({user_id:userId, title, description}) as Task
		return c.json(result, 201)
		
	} catch (err) {
		console.log(err)
		return c.json({message:'Internal server error'}, 500)
	}
}

export async function getTasks(c:Context, db:Database){
	try {
		const extractedAllTasks = db.query(`
SELECT * FROM tasks
`).get() as Task[]
		return c.json(extractedAllTasks, 200)

	} catch (err) {
		console.log(err)
		return c.json({message:'Internal server error'}, 500)
	}
}

export async function getTask(c:Context, db:Database){
	const taskId = c.req.param('id')
	try {
		const extractedTask = db.query(`
SELECT * FROM tasks WHERE id = ?
`).get(taskId) as Task
		if(!extractedTask){
			return c.json({message:'Task not found'}, 404)
		}
		return c.json(extractedTask, 200)

	} catch (err) {
		console.log(err)
		return c.json({message:'Internal server error'}, 500)
	}
}

export async function updateTask(c:Context, db:Database){
	const taskId = c.req.param('id')
	const userId = c.get('jwtPayload').userId
	const userRole = c.get('jwtPayload').role
	const {title, description , user_id} =  await c.req.json()

	if(!userId){
		return c.json({message:'You are not authenticated'}, 401)
	}
	if(userRole !== 'admin'){
		return c.json({message:'You are not authorized to create a task'}, 401)
	}

	if(userId !== user_id){
		return c.json({message:'You are not authorized to create a task'}, 401)
	}

	try {
		const extractedTask = db.query(`
SELECT * FROM tasks WHERE id = ?
`).get(taskId) as Task
		if(!extractedTask){
			return c.json({message:'Task not found'}, 404)
		}
		const result = db.query(`
UPDATE tasks SET title = ?, description = ? WHERE id = ?
`).get({title, description, taskId}) as Task
		return c.json(result, 201)

	} catch (err) {
		console.log(err)
		return c.json({message:'Internal server error'}, 500)
	}
}
