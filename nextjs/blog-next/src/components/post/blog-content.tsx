import { BlogContentProps } from "@/types";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import DeltedBlogButton from "./delete-blog-button";
import { formatDate } from "@/lib/utils";
import { Button } from "../ui/button";
import { Pencil } from "lucide-react";
import Link from "next/link";

export default function BlogContent({blog,isAuthor}: BlogContentProps){
	return <Card>
		<CardHeader>
			<CardTitle className="text-3xl">
				{blog.title}
			</CardTitle>
			<CardDescription>
				By {blog.author.name}  -{formatDate(blog.createdAt)}
			</CardDescription>
		</CardHeader>
		<CardContent>
			<p className="text-muted-foreground text-lg mb-6">{blog.description}</p
			>
			<p className=" font-bold text-lg mb-6"> {blog.content}</p>

		</CardContent>

		{isAuthor && (
		<CardFooter className="flex gap-2" >
				<Button asChild variant='outline' size="sm">
					<Link href={`/blog/edit/${blog.slug}`}>
						<Pencil className="h-4 w-4 mr-2"/>
						Edit
					</Link>
				</Button>
				<DeltedBlogButton blogId={blog.id} />
			</CardFooter>
		) }
	</Card> 
}
