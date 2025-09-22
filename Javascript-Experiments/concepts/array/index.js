const arr = [32]
const res = arr.push(32,234) // res will be the new length of the array 
const popres = arr.pop() // return value will be the removed element 
// arr.fill(10,1,2) // fills 10 from index 1 to 1 
//arr.copyWithin(target,start, end) // copies the values from index start to end-1 to the position target 

const employees = [{name:"bilal", age: 24}, {name: "another name", age: 10}]

const groupedBasedAge = Object.groupBy(employees, (employee)=> employee.age) // groups based on the age and create a new array 

const numbers = [1,2,3,4,5,6,7,8]

const newNumbers = numbers.with(0,10) //  crate a new araray with 0 the indexed item changed to 10 without mutating the numbers array 

const newArr = Array.of(12,"fsdf") // create a new array with vaiable number of arguments 

