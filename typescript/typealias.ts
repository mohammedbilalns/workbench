type user = {
	name:string, 
	age: number, 
	address: string 
}

type admin = {
	readonly _id: string,
	name:string, 
	age: number, 
	address: string 
}

let newAdmin: admin = {
	 _id:"fsdfsd",
	name: "sfdkljh",
	age: 43, 
	address: "sfdlkm" 
}

newAdmin.name = "fsdlknsd"

function modifyUser(userDetails: user): user{



	return {name:"", age:32, address:""}

}

function modifyAdmin(adminDetails: admin):admin{
	return {_id:"",name:"", age:32, address:""}
}

