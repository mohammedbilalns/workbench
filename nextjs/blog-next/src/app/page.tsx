import type { Metadata } from 'next';
import { getAllBlogs } from "@/lib/db/queries"
import PostList from '@/components/post/blog-list';

export const metadata: Metadata = {
	title : "Blog",
	description:"Blog list"
}; 
export default async function Home() {

	const blogs = await getAllBlogs()
  return (

	<main className="py-10">
 		<div className="max-w-7xl mx-auto px-4">
				<h1 className="text-4xl font-bold mb-2">Welcome to the Blog</h1>
				{
					blogs.length == 0 ? 
					<div className='text-center py-10'>
					<h2 className='text-xl font-medium'>No Blogs found</h2>
					</div> : <PostList  blogs={blogs}/>
				}

			</div>
		</main>
	) 
}
