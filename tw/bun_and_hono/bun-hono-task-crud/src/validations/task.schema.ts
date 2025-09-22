import { z } from 'zod'

export const taskSchema = z.object({
	title: z.string().min(3).max(100),
	description: z.string().min(3).max(100).optional(),
	user_id: z.number().int().positive()
})
