"use client"

import { useRouter } from "next/navigation"

export default function NotFound(){
	
	const router = useRouter()
	return <div>
		<h1>The page you are looking is not found</h1>
		<button className="bg-black p-5 text-white" onClick={()=> router.push('/')}>Go to home page </button>
	</div>
}
