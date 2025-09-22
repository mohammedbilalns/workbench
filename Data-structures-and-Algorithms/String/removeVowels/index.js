

function removeVowels(str){
	const vowels = ['a','e','i','o','u','A','E','I','O','U']

	let modifiedStr = ""

	for(let char of str){
		if(!vowels.includes(char)){
			modifiedStr+= char
		}
	}
	return modifiedStr
}


// more efficient one 

function removeVowels2(str){
	const vowels = new Set(['a','e','i', 'o','u','A','E','I','O','U'])
	let result = []

	for(let char of str){
		if(!vowels.has(char)){
			result.push(char) 
		}
	}
	
	return result.join('')
}

console.log(removeVowels2("bilal"))
