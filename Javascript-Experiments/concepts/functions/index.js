/* Function Declaration */
function add(a,b){
	return a+b 
}
// hositing : can be called before the defenition
// always named 
// can be used as constructors

/* Function Expressions */
const substraction = function(a,b){
	return a-b 
}
// Hoisting : only available after assignment 
// anonymous functions 
// can be used as constructors 

/* Arrow Functions */
const multiplication = (a,b) => a*b
// Hoisting : only available after assignment 
// anonymous function 
// cannot be used as constructors 
// No this context , inherits from the outer scope 



/* Properties */
// ?? caller 
// ?? arguments 
// ?? prototype
