import { Suspense, use } from "react"
interface User {
	id: number , 
	firstName: string, 
	lastName : string 
}

interface UserResponse {
	users: User[],

}


function getUsers(): Promise<UserResponse>{
	return fetch('https://dummyjson.com/users'  ).then(res=> res.json())
}


export default function UseHook(){

	const usersPromise = getUsers()


	return <div>
		<h1>Users list </h1>
		<Suspense fallback={<div>Loading... </div>}>
			<UsersList usersPromise={usersPromise}></UsersList>
		</Suspense>
	</div>
}


function UsersList({usersPromise}: {usersPromise:Promise<UserResponse>}){
	const getUsersList = use(usersPromise)
	console.log(getUsersList.users)	
	return (<div>
		{getUsersList.users.map(user=> <div key={user.id}>

			<p>{user.firstName}  {user.lastName}</p> 
		</div>  )}
	</div>)
}
