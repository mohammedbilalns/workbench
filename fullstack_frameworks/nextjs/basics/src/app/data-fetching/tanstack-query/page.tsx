"use client"
import { useQuery } from "@tanstack/react-query"

interface Post {
	id: number, 
	title: string ,
	body : string 
}

interface PostsResponse {
	posts: Post[]
	total : number  
}
export default function ReactQuery(){
	const { data , isLoading , error , refetch } = useQuery<PostsResponse>({
		queryKey: ['posts'],
		queryFn: async()=>{
			const response = await fetch('https://dummyjson.com/posts')
			if(!response.ok){
				throw new Error("Failed to fetch posts")
			}
			return await response.json()
		}, 
		staleTime: 2 * 60 * 1000 
	})
	if(isLoading){
		return <div>loading... </div>
	}

	if(error){
		return <div className="text-red-600"><p>{error.message}</p></div>
	}
	return <div>
		<h1>React Query example </h1>
		{
			data?.posts.map(post=> 
			<div key={post.id}>
				<h1>{post.title}</h1>
				<p>{post.body}</p>
			</div>)
		}		
	
	</div>
	
} 
