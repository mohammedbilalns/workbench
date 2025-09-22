import {Hono} from "hono"
import { zValidator } from "@hono/zod-validator"
import { taskSchema } from "../validations"
import { createTask, getTask, getTasks, updateTask } from "../controllers/task"
import { initDatabase } from "../db/db"

export const tasksRoutes = new Hono()
const db = initDatabase()

tasksRoutes.post('/tasks', zValidator('json', taskSchema), (c) => createTask(c,db))
tasksRoutes.get('/tasks', zValidator('json', taskSchema), (c) => getTasks(c,db))
tasksRoutes.get('/tasks/:id', zValidator('json', taskSchema), (c) => getTask(c,db))
tasksRoutes.put('/tasks/:id', zValidator('json', taskSchema), (c) => updateTask(c,db))


export default tasksRoutes
