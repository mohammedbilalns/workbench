import { db } from "."
import { blogs } from "./schema"
import { desc, eq } from "drizzle-orm"


export async function getAllBlogs(){
	try{
		const AllPosts = await db.query.blogs.findMany({
			orderBy: [desc(blogs.createdAt)],
			with: {
				author: true 
			}
		})

		return AllPosts

	}catch(e){
		console.log(e)
		return []
	}
}


export async function getBlogBySlug(slug: string){

	try{
		const blog = await db.query.blogs.findFirst({
			where: eq(blogs.slug,slug),
			with: {
				author: true 
			}
		})
		return blog

	}catch(e){
		console.log(e)
		return null 
	}
}
