import { useState } from "react"

function App() {
	const [menuopened, setmenuOpened ]=  useState(false)

	return (
		<div className="bg-gradient-to-b from-[#fbc2eb] to-[#a6c1ee] h-screen">

			<header className="bg-white">
				<nav className=" flex justify-between items-center w-[92%]  mx-auto">
					<div>

						<p className="text-xl font-bold">MovieBuff</p>
					</div>
					<div className={` md:static absolute bg-white md:min-h-15 md:w-auto min-h-[60vh] left-0 top-[-100%] w-full flex items-center px-5 ${menuopened ? "top-[4.7%]" : "top-[-100%]"} transition-normal `} >
						<ul className="flex md:flex-row flex-col md:items-center md:gap-[4vh] gap-8">
							<li>
								<a href="#" className="hover:text-gray-500">Products</a>
							</li>
							<li>
								<a href="#" className="hover:text-gray-500">Solution </a>
							</li>
							<li>
								<a href="#" className="hover:text-gray-500">Resource</a>
							</li>
							<li>
								<a href="#" className="hover:text-gray-500">Development </a>
							</li><li>
								<a href="#" className="hover:text-gray-500">Pricing</a>
							</li>

						</ul>

					</div>

					<div className="flex items-center gap-6">
						<button className="bg-[#a6e1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec] cursor-pointer transition-colors ">Sign in </button>
						<svg onClick={()=> setmenuOpened(!menuopened)}  className="text-3xl cursor-pointer md:hidden" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M5 7H25" stroke="black" stroke-width="3" stroke-linecap="round"/>
							<path d="M5 15H25" stroke="black" stroke-width="3" stroke-linecap="round"/>
							<path d="M5 23H25" stroke="black" stroke-width="3" stroke-linecap="round"/>
						</svg>
					</div>

				</nav>
			</header>
		</div>
	)
}

export default App
