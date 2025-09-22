"use client"
import {Input} from "@/components/ui/input"
import {Textarea} from "@/components/ui/textarea"
import {Button} from "@/components/ui/button"
import { useForm } from "react-hook-form"
import { blogFormValues, blogSchema } from "@/app/blog/validations/blogSchema"
import { useTransition } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { toast } from "sonner"
import { createBlog,updateBlog } from "@/actions/blog-actions"
import { useRouter } from "next/navigation"


interface BlogFormProps {
	isEditing? : boolean; 
	blog?: {
		id: number;
		title: string;
		description: string;
		content: string; 
		slug: string; 
	}
}
export default function BlogForm({isEditing, blog}:BlogFormProps){

	const router = useRouter()
	const [isPending , startTransition] = useTransition()
	const {register, handleSubmit, formState: {errors}} = useForm<blogFormValues>({
		resolver: zodResolver(blogSchema),
		defaultValues: isEditing && blog ?
			{
				title: blog.title,
				content: blog.content,
				description: blog.description
			}
			: {
				title: '',
				description:'',
				content: ''
			}
	})

	const onFormSubmit = async (data: blogFormValues) => {
		startTransition(async ()=>{
			try{
				const formData = new FormData()
				formData.append('title', data.title)
				formData.append('description', data.description)
				formData.append('content', data.content)

				let res; 
				if(isEditing && blog){
 					res = await updateBlog(blog.id,formData )
				}else {
					res = await createBlog(formData)
				}

				
				if(res.success){
					toast(res.message)
					router.refresh()
					router.push('/')
				}
			}catch(err){
				console.log(err)
				toast( isEditing ? "Failed to update Blog":  "Failed to create Blog")
			}
		})
		console.log(data)
	}

	return <form  className="space-y-4" onSubmit={handleSubmit(onFormSubmit)}>
		<div className="space-y-2">
			<label htmlFor="title">Title</label>
			<Input id="title" placeholder="Enter Blog title " {...register('title')} 
				disabled={isPending}
			/>
			{errors.title && <p className="text-sm text-red-700">{errors.title.message}</p>}
		</div>
		<div className="space-y-2">
			<label htmlFor="description">Description</label>
			<Textarea
				id="description" placeholder="Enter a description"
				{...register("description")}
			>

			</Textarea>

				{errors.description && <p className="text-sm text-red-700">{errors.description.message}</p>}
		</div>
		<div className="space-y-2">
			<label htmlFor="content">Content</label>
			<Textarea id="content" className="min-h-[350px]"  placeholder="Enter Blog content "  {...register("content")}  disabled={isPending} />
			{errors.content && <p className="text-sm text-red-700">{errors?.content?.message}</p>}	
		</div>
		<Button type="submit" className="mt-5 w-full cursor-pointer" disabled={isPending} >{
			isPending ? 'Saving Blog...' : isEditing? 'Update Blog':  'Create Blog'
		} </Button>
	</form> 
} 
