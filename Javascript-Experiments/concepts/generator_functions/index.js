/* Special kind of funcions that can be paused and resumed */
function* myGenerator(){
	yield 1 
	yield 2 
	return 3 
}

const a = myGenerator() // returns generator object 
console.log(a.next()) // next method is used to resume execution of the generator function from where it last paused at a yield 
// next returns an object with two properties value- yielded value and done: which is a boolean denotes weather the generator can continue or not 
console.log(a.throw()) // throw method allows to inject an exception into the generator function at the point where it is currently paused 
console.log(a.return()) // return method immediately finishes the generator's execution.



