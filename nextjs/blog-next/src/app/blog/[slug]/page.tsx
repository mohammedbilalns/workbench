import { auth } from "@/lib/auth";
import BlogContent from "@/components/post/blog-content";
import { getBlogBySlug } from "@/lib/db/queries";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export default async function  BlogDetailsPage({params}: {params:Promise<{slug:string}>}){
	const {slug} = await params
	const blog = await getBlogBySlug(slug) 
	const session = await auth.api.getSession({
		headers: await headers()
	})

	if(!blog){
		notFound()
	}

	const isAuthor = session?.user?.id === blog.authorId

	return <main className="py-10">
		<div className="max-w-4xl mx-auto">
			<BlogContent isAuthor={isAuthor} blog={blog} />	
		</div>
	</main> 
}
