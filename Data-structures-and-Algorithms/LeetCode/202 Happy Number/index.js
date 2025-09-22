

var isHappy = function(n) {


	function sumOfSquares(num){
		let sum = 0 
		while(num > 0 ){
			let lastDigit = num %10 
			sum += lastDigit * lastDigit 
			num = Math.floor(num/10)
		} 

		return sum 

	}


	let slow = n 
	let fast = n 

	while(fast  !==1 && sumOfSquares(fast) !==1 ){
		slow = sumOfSquares(slow)
		fast = sumOfSquares(sumOfSquares(fast))

		if(fast == slow){
			return false 
		}
	}

	return true 
};





console.log(isHappy(10))
