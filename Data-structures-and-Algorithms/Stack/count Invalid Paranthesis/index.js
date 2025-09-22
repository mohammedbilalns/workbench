// given a string contains paranthesis find the number of invalid paranthesis in it 


function countInvalidParanthesis(str){

	let stack = []
	let valid = new Map([
		[')','('],
		['}','{'],
		[']','[']
	])

	let invalidCount = 0 
	for(let i=0 ;i<str.length ;i++){
		if(valid.has(str[i])){
			if( stack.length==0 || stack.pop() !== valid.get(str[i])){
				invalidCount++ 
			}

		}else{
			stack.push(str[i])
		}
	}

	return invalidCount+stack.length
}



console.log(countInvalidParanthesis("{}({)}("))
