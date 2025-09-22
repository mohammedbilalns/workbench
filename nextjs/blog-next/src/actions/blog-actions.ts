"use server"

import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { blogs } from "@/lib/db/schema"
import { slugify } from "@/lib/utils"
import { log } from "console"
import { and, eq, ne } from "drizzle-orm"
import { revalidatePath } from "next/cache"
import { headers } from "next/headers"

async function checkSession({action}:{action: string}){
	const session = await auth.api.getSession({
		headers: await headers()
	})
	if(!session || !session.user){
		throw new Error(`You must be logged in to ${action} blog`)	
	}
	return session.user.id
}

export async function createBlog(formData: FormData){

	try {
		const userId = await checkSession({action:'create'})	
		const title = formData.get('title') as string || null 
		const description = formData.get('description') as string || null 
		const content = formData.get('content') as string || null

		if(!title || !description || !content){
			return {
				success: false,
				message: 'Title description and content are required'
			}
		}
		const slug = slugify(title) 
		const existingPost = await db.query.blogs.findFirst({
			where: eq(blogs.slug,slug )
		})

		if(existingPost){
			return {
				success: false,
				message: 'A post with this title already exists, please try another title'
			}
		}

		await db.insert(blogs).values({
			title,
			description,
			content,
			slug,
			authorId: userId
		}).returning()

		// revalidating paths 
		revalidatePath('/')
		revalidatePath('/post/${slug}')
		revalidatePath('/profile')
		return {
			success: true ,
			message: "Blog Created Successfully",
			slug
		}

		
	} catch (err) {
		log(err)
		return {
			success: false,
			message: 'Something went wrong'
		}
	}
}

export async function updateBlog(blogId: number, formData: FormData){
	try{
		const userId = await checkSession({action:'update'})

	  const title = formData.get('title') as string || null 
		const description = formData.get('description') as string || null 
		const content = formData.get('content') as string || null

		if(!title || !description || !content){
			return {
				success: false,
				message: 'Title description and content are required'
			}
		}
		const slug = slugify(title) 

		const existingBlog = await  db.query.blogs.findFirst({
			where: and(eq(blogs.slug, slug), ne(blogs.id, blogId))
		})  

		if(existingBlog) {
			return {
				success: false, 
				message: "A post with this title already exists "
			}
		}

		const blog = await db.query.blogs.findFirst({
			where: eq(blogs.id, blogId)
		})

		if(blog?.authorId !== userId){
			return {
				success: false, 
				message: "You can only edit your own Blog "
			}
		}

		await db.update(blogs).set({title,description,content,slug , updatedAt: new Date()}).where(eq(blogs.id, blogId))

		revalidatePath('/')
		revalidatePath(`/post/${slug}`)
		revalidatePath('/profile')

		return {
			success: true , 
			message: 'Blog updated successfully'
		}

	}catch(err){
		log(err)
		return {
			success: false,
			message: "Something went wrong"
		}
	}
}


export async function deleteBlog(blogId: number){
	try{
		const userId = await checkSession({action: "delete"})
		const blogToDelete = await db.query.blogs.findFirst({
			where: eq(blogs.id, blogId)
		})
		if(!blogToDelete){
			return {
				success: false, 
				message: 'Blog not found'
			}
		}

		if(blogToDelete?.authorId !== userId){
			return {
				success: false, 
				message : "You can only edit your own post"
			}
		}

		await db.delete(blogs).where(eq(blogs.id,blogId))
		revalidatePath('/')
		revalidatePath('/profile')

		return {
			success: true , 
			message: "Blog deleted successfully"
		}
	}catch(err){
		log(err)
		return {
			success: false, 
			message: "Something went wrong"
		}
	}
}
