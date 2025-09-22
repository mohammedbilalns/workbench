class Rectangle{

	constructor(length , breadth){
		this.length = length 
		this.breadth = breadth  
	}

	area(){
		return this.length * this.breadth 
	}
}

// JavaScript ES6  classes are not a new type of data structure—they’re syntactic sugar over constructor functions and prototypes
console.log(typeof Rectangle ) // function 

/* Properties  */

// length of the class is the number of paramers defined in the class constructor 
	console.log("Number of params of the constructor : ", Rectangle.length)
// name of the class 
	console.log("Name of the class: ", Rectangle.name)
// convert class into string 
	console.log("Class converted into string", Rectangle.toString())



/* Methods  */

