"use client"
import { useEffect } from "react"

export default function ErrorFallback ({error, reset}:{error: Error & {digest?: string }, reset:()=>void}){

	useEffect(()=>{
		// send report to error logging service 
	}, [error])

	return <div>
		<p className="text-red-600">{error?.message  || 'An error occured'}</p>
	</div>

}
