import { Container } from "@/components/layouts"
import BlogForm from "@/components/post/blog-form"
import { auth } from "@/lib/auth"
import { getBlogBySlug } from "@/lib/db/queries"
import { headers } from "next/headers"
import { notFound, redirect } from "next/navigation"

export default async  function EditPostPage({params}: {params: Promise<{slug: string}>}){
	
	const {slug} = await params
	const session = await auth.api.getSession({
		headers: await headers()
	})
	if(!session || !session.user){
		redirect('/')
	}

	const blog = await getBlogBySlug(slug)
	if(!blog) notFound()
	if(blog.author.id !== session.user.id) redirect('/')
	
	return <Container>
		<h1 className="max-w-2xl font-bold mb-6"> Edit Post</h1>
		<BlogForm isEditing={true} blog={{
			id: blog.id ,
			title: blog.title,
			description: blog.description,
			content: blog.content,
			slug: blog.slug
		}} />
	</Container> 

}
