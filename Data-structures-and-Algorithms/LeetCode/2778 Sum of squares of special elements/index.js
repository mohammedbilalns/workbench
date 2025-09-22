var sumOfSquares = function(nums) {
	let specialIndexes = [];

	for (let i = 1; i <= nums.length; i++) {      
		if (nums.length % i === 0) {
		specialIndexes.push(i - 1); 
	}
	}


	let squareSum = 0;
	for (let i = 0; i < specialIndexes.length; i++) {
		squareSum += nums[specialIndexes[i]] ** 2;
	}

	return squareSum;
};




console.log(sumOfSquares([1,2,3,4]))
