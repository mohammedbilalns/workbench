

// Give an integer x , return true if x is a pallindrome , and false otherwise 
var isPallindrome = function(x){
	let number=x , pallindromeNumber =0 
	let numLength = x.toString().length
	let nextPowerofTen = 10** (numLength-1) 

	for(let i=1;i<=numLength;i++){
		pallindromeNumber += (number % 10) *nextPowerofTen
		number = Math.trunc(number/10)
		nextPowerofTen/=10
	
	}
	if(pallindromeNumber === x && x>=0){
		console.log("true")
		return true
	}else{
		console.log("false")
		return false
	}
}

isPallindrome(1554)
