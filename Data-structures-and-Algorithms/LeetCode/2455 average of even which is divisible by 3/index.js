// Given an integer array nums of positive integers, return the average value of all even integers that are divisible by 3.

// Note that the average of n elements is the sum of the n elements divided by n and rounded down to the nearest integer.


// O(n)T , O(1)S
var averageValue = function(nums){
    let sum = 0
    let count = 0 
    for(let i=0;i<nums.length;i++){
        if(nums[i]%6 === 0 ){
            sum +=  nums[i]
            count++
        }
    }
    if(count === 0 ) return 0 
    return Math.round(sum/count)
}


console.log(averageValue([1,3,6,10,12,15]))