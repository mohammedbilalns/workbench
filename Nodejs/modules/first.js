const add = (a,b)=> a+b 
const substract = (a,b) => a-b 
const divide = (a,b) => {
	if(b == 0 ) throw new Error("Cannot divide by zero")
	return a/b
}
module.exports = {add, substract, divide}
