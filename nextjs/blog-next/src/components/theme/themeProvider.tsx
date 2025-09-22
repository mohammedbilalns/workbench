'use client'
import { ThemeProvider as NextThemesProvider , ThemeProviderProps } from "next-themes"
import { Header, Footer } from "../layouts"
import { cn } from "@/lib/utils"


interface ExtendedThemeProviderProps extends ThemeProviderProps {
	containerClassname?: string 
}

export default function ThemeProvider({children ,containerClassname,  ...props}: ExtendedThemeProviderProps ){

	return (
		<NextThemesProvider {...props}>
			<Header></Header>
			<main className={cn("conatiner mx-auto px-4 ", containerClassname)}>
				{children}
			</main>
			<Footer></Footer>
		</NextThemesProvider>
	)

}
