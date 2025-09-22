
function  largestWord(str){

	let currLength = 0 
	let maxLength  = 0 
	let maxWord = ""
	let currWord = ""
	for(let i=0 ;i<=str.length ;i++){
		if(str[i] ==" "|| i == str.length){
			if(currLength > maxLength){
				maxLength = currLength
				maxWord = currWord
			}
			currLength = 0 
			currWord = ""

		}else {
			currWord += str[i]
			currLength++ 
		}
	}

	return maxWord
}


console.log(largestWord("hello wor"))
