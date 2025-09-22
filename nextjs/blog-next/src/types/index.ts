export interface  blogsListProps {
	blogs : Array<{
		id: number,
		title: string, 
		description: string, 
		slug: string, 
		createdAt:Date, 
		author: {
			name: string 
		}
	}>
}


export interface BlogCardProps {
	blog: {
		id: number,
		title: string, 
		description: string, 
		slug: string, 
		createdAt: Date,
		author: {
			name: string
		}
	}
}

export interface BlogContentProps {
	blog: {
		id: number,
		title: string, 
		description: string, 
		content: string,
		slug: string, 
		createdAt: Date,
		updatedAt: Date,
		author: {
			name: string
		}
	},
	isAuthor:boolean
}


export interface DeleteBlogButtonProps{
	blogId: number
}



