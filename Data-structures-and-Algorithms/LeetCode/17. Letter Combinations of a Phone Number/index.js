var letterCombinations = function(digits){
	let keys = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
	let digitsNum = digits.split('').map(Number)

	let combinations = []
	for(let num in digitsNum){
		for(let letters of keys[num]){

		}
	}

}





console.log(letterCombinations("23"))
