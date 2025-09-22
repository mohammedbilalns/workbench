var maxSubsequence = function(nums, k) {
 
	let indexArr = nums.map((elem, index) => ({elem, index}))
	let largestKArr = indexArr.sort((a, b) => b.elem - a.elem).slice(0,k)
	let sortedBack = largestKArr.sort((a,b)=> a.index - b.index).map(value => value.elem)
	return sortedBack
	
};



console.log(maxSubsequence([3,4,3,3],2))
