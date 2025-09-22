

function isPallindrome(str){

	let stack = []
	for(let i=0 ; i<str.length ;i++){
		stack.push(str[i])
	}

	for(let i= 0 ;i<str.length;i++){
		if(stack.pop()!== str[i]){
			return false 
		}
	}

	return true 
}



console.log(isPallindrome("malayalam"))
