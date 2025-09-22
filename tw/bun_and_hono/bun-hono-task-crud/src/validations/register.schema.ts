import { z } from 'zod'

export const registerSchema  = z.object({
	username: z.string().min(3).max(35),
	password: z.string().min(5),
	role: z.enum(['user', 'admin']).optional()
})
