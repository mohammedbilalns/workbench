

var nextPermutation = function(nums) {

    nums.sort((a,b)=>a-b)
    let temp = nums[1]
    nums[1] = nums[2]
    nums[2] = temp 
    
    return nums
};


console.log(nextPermutation([3,2,1]))