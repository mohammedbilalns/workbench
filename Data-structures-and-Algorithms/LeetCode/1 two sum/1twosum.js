// Given an array of integers nums and intege target , return indices of the tow numbers such thta they add up to target 

// Method 1
// Time complexity: O(n^2)
// Space complexity: O(1)

var twoSum = function(nums, target){
	
	let arrayLength = nums.length 
	for(let i=0;i< arrayLength-1;i++){
		for(let j=i+1; j<arrayLength;j++){
			if(nums[i]+nums[j]===target){
				return [i,j]
			}
		}
	}
}

// Method 2
// Time complexity: O(n)
// Space complexity: O(n)

var twoSum2 = function(nums, target){
	let map = new Map()
	for(let i=0;i<nums.length;i++){
		let complement = target - nums[i]
		if(map.has(complement)){
			return [map.get(complement), i]
		}
		map.set(nums[i], i)
	}
	return []
}

console.log(twoSum2([4,5,6,7,8,9],14))
console.log(twoSum([4,5,6,7,8,9],14))
