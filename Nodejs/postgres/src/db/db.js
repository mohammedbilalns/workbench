import {Pool} from "pg"
import { configDotenv } from "dotenv"
configDotenv()
// create pool instance to manage database connections 
const pool = new Pool({
	connectionString: process.env.DATABASE_URL
})

export async function query(text,params){
	const start = Date.now()
	
	try{
		const result  = await pool.query(text,params)
		const duration = Date.now() - start 
		console.log(`Executed query: ${{text, duration, rows:result.rowCount}}`)
		return result
	}catch(err){
		console.error(err)
		throw err 
	}
}



