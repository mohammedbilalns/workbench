// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

var findGCD = function(nums){

    let min = Math.min(...nums)
    let max = Math.max(...nums)

    let gcd = function(a,b){
       if(b===0) return a 
       return gcd(b, a%b)
    }

    return gcd(min,max)

}

console.log(findGCD([7,5,6,8,3]))