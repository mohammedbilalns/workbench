import { Hono } from 'hono'
import { initDatabase } from './db/db'
import {cors} from "hono/cors"
import {logger} from "hono/logger"
import { authRoutes } from './routes/auth.routes'
import { tasksRoutes } from './routes/tasks.routes'


const app = new Hono()
const db  = initDatabase()

// middlewares 
app.use('*', cors())
app.use('*', logger())


app.route('/auth', authRoutes)
app.route('/tasks', tasksRoutes)

app.get('/', (c) => {
  return c.text('Hello World !')
})

app.get('/db-test', (c)=>{
	const result = db.query(`SELECT sqlite_version()`).get()

	return c.json({
		message:"Database connected successfully",
		sqlite_versino: result
	})
})


export default app
