


function largestSubstring(str){

	let largestSubstring = ""
	let substr = ""
	let vowels = ['a','e','i','o','u','A','E','I','O','U']
	for(let i= 0 ; i < str.length ; i++){
		let isVowel = false 
		for(let j=0 ; j< vowels.length ; j++){
			if(str[i] == vowels[j]){
				isVowel = true
				break 
			}
		}

		if(isVowel){
			largestSubstring = substr.length > largestSubstring.length ? substr : largestSubstring
			substr = ""
		}else {
			substr+= str[i]
		}
	}
	largestSubstring = substr.length > largestSubstring.length ? substr : largestSubstring
	return largestSubstring
}



console.log(largestSubstring("Hello world"))
