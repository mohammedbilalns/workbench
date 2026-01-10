import { blogsListProps } from "@/types";
import BlogCard from "./blog-card";

export default function PostList({blogs}:blogsListProps){

	return (
	<div className="grid grid-cols-1 mt-10 md:grid-cols-2 lg:grid-cols-3 gap-6">
		{
			blogs.map(blog =>(
					<BlogCard key={blog.id} blog={blog} />
			))	
			}

		</div>
	) 
}
