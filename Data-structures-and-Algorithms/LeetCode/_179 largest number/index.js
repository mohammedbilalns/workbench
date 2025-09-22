var largestNumber = function(nums) {
    
	let stringNum = nums.map(num=> ""+num)
	return stringNum.sort((a,b)=>b.localeCompare(a)).join('');
    
};


console.log(largestNumber([10,2]))
