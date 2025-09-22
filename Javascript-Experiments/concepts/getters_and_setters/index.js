// getters and setters in object 
const person = {
	firstname: "Mohammed",
	get name(){
		return this.firstname 
	},
	set name(name){
		this.firstname = name 
	}
}

// person.name = "fdsffs"
// console.log(person.name)


// getters and setters in class 
class Rectangle{
	constructor(length, breadth){
		this.length = length 
		this.breadth = breadth 
	}
}


