import {Hono} from "hono"
import { zValidator } from "@hono/zod-validator"
import { loginSchema, registerSchema } from "../validations"
import { loginUser, registerUser } from "../controllers/auth"
import { initDatabase } from "../db/db"

export const authRoutes = new Hono()
const db = initDatabase()

authRoutes.post('/register-user', zValidator('json', registerSchema), (c) => registerUser(c,db))

authRoutes.post('/login', zValidator('json', loginSchema), (c) => loginUser(c,db))


export default authRoutes
