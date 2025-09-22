import {z} from "zod"

export const blogSchema = z.object({
	title: z.string().min(3, {message: "Title must be at least 3 characters"}),
	description: z.string().min(5, {message:"Description must be atleast 5 characters long"}),
	content: z.string().min(10, {message: "Content must be at least 10 characters"}),
})


export type blogFormValues = z.infer<typeof blogSchema>
