import { BlogCardProps } from "@/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import { formatDate } from "@/lib/utils";

export default function BlogCard({blog}:BlogCardProps){
	return (
	<Card className="h-full flex flex-col">
			<CardHeader>
				<Link className="hover:underline" href={`/blog/${blog.slug}`}>
					<CardTitle className="text-3xl">{blog.title}</CardTitle>
				</Link>
				<CardDescription>
					By {blog.author.name} - {formatDate(blog.createdAt)}
				</CardDescription>
			</CardHeader>

			<CardContent>
				<p className="text-muted-foreground">{blog.description}</p>
			</CardContent>

		</Card>
	)
}
