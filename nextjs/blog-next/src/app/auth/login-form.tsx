"use client "
import { useForm } from "react-hook-form"
import { loginFormValues, loginSchema } from "./validations"
import { zodResolver } from "@hookform/resolvers/zod"
import { useState } from "react"
import { Form, FormField, FormItem, FormLabel, FormControl , FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { signIn } from "@/lib/auth-client"
import { toast } from "sonner"
import { useRouter } from "next/navigation"

export default function LoginForm(){
	const router = useRouter()
	const [isLoading , setIsLoading] = useState(false)
	const form = useForm<loginFormValues>({
		resolver:zodResolver(loginSchema),
		defaultValues:{
			email:'', 
			password:''
		}
	})

	const handleLogin = async (values: loginFormValues)=> {
		setIsLoading(true)
		try{
			const {error } = await signIn.email({
				email: values.email,
				password: values.password,
				rememberMe: true 
			})

			if(error){
				const message = error.message || 'Login failed'
				toast(message)
				return 
			}
			toast('Login Success ')
			router.push('/')
		}catch(err){
			console.error(err)
		}finally{
			setIsLoading(false)
		}

	}

	return <Form {...form}>
		<form onSubmit={form.handleSubmit(handleLogin)} className="space-y-4">
			<FormField
				control={form.control}
				name="email"
				render={({field})=> (
					<FormItem>
						<FormLabel>Email</FormLabel>
						<FormControl>
							<Input placeholder="Enter your email" {...field} />
						</FormControl>
						<FormMessage/>
					</FormItem>
				)}
			>

			</FormField>
			<FormField
				control={form.control}
				name="password"
				render={({field})=> (
					<FormItem>
						<FormLabel>Password</FormLabel>
						<FormControl>
							<Input type="password" placeholder="Enter your password" {...field} />
						</FormControl>
						<FormMessage/>
					</FormItem>
				)}
			>

			</FormField>
			<Button type="submit" className="w-full cursor-pointer" disabled={isLoading}>
					{isLoading? "Signing in... ": "Sign In"}
			</Button>
		</form>

	</Form>
}
