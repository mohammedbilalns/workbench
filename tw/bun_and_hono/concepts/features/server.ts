import {deflateSync, type Server} from "bun"

interface User {
	id:number;
	name: string; 
}

interface ApiResponse {
	message: string;
	method: string;
	route : string; 
	data? : User| User[];
}

const users = [{id:1 , name:"user 1 "}, {id:2, name:"user 2"}, {id:3, name:"user 3"}]

const server: Server = Bun.serve({
	port: 3000,
	fetch(req: Request):Response {
		const url = new URL(req.url)
		const method = req.method 

		const response: ApiResponse  = {
			message: 'Hello world',
			method: method ,
			route: url.pathname 
		} 

		if(url.pathname == '/'){
			if(method == 'GET'){
				response.message = 'Welcome to Bun Api '
			}else{
				response.message = "Method not allowed for this route "
			}
		}else if(url.pathname == '/users'){
			switch(method){
				case 'GET':
					response.message = "Fetching all users"
					response.data = users
					break;
				case "POST":
					response.message = "Creating new user "
					break ; 
				default: 
					response.message = "Method not allowd for this route"
					break 
			}
		}
		return Response.json(response)
	}
})

console.log('Bun server is running... ');

