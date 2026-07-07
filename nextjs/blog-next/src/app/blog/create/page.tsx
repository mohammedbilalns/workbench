import { Card,CardHeader, CardTitle, CardContent  } from "@/components/ui/card"
import BlogForm from "@/components/post/blog-form"

export default function CreateBlogPage() {
	return <main className="py-10">
	<div className="max-w-4xl mx-auto">
			<Card>
				<CardHeader>
					<CardTitle>Create New Blog </CardTitle>
				</CardHeader>
				<CardContent>
					<BlogForm/>
				</CardContent>
			</Card>
			
		</div>
	</main>}
