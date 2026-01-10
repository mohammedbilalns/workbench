"use client"
import { cn } from "@/lib/utils"
import Link from "next/link"
import { Button } from "../ui/button"
import { useSession } from "@/lib/auth-client"
import UserMenu from "@/app/auth/user-menu"
import ThemeToggle from "../theme/theme-toggle"

export function Header(){

	const {data: session , isPending} = useSession()

	const navItems = [{
		label:"Home", href:"/"
	},
		{
			label:"Create", href:"/blog/create"
		}
	]
	return ( <header className="border-b bg-background sticky top-0 z-10 ">
		<div className="container mx-auto px-4 h-16 flex items-center justify-between gap-6  ">
			<div className="flex flex-items gap-6">
				<Link href="/" className="font-bold text-xl">
					Blog 
				</Link>

				<nav className="hidden md:flex items-center gap-6">
					{
						navItems.map((navItem)=>
							<Link key={navItem.href} href={navItem.href}
								className={cn('text-sm font-medium transition-colors hover:text-primary')}
							>
								{navItem.label}
							</Link>
						)
					}
				</nav>
			</div>
			<div className="flex items-center gap-4">
				<div className="hidden md:block">
					{/* search */}
				</div>
			   <ThemeToggle></ThemeToggle>	
				<div className="flex items-center gap-2 cursor-pointer ">
				{isPending ? null : session?.user ? <UserMenu user={session?.user} /> : <Button className="cursor-pointer" variant={'default'} asChild>
						<Link href='/auth'>Login</Link>
						
					</Button>

}		
				</div>
			</div>



		</div>
	</header>)
}
