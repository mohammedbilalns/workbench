"use client"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

export default function Profile(){

	const router = useRouter() // allows navigation in client components 
	const pathname = usePathname() // can retrieve the current pathname 
	const searchParams = useSearchParams() // retrieve all the searchparams as object  
	console.log(searchParams)
	const handleNavigation = ()=>{
		router.push('/')
	}
	return <div>
		<h1>Profile page </h1>
		<button onClick={handleNavigation}>Navigate to the home page </button>
	</div>
}
