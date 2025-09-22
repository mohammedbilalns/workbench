// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].



function productExceptSelf(nums: number[]): number[] {

    let resultArray = new Array(nums.length).fill(1)

    let prefix = 1 
    for(let i=0 ; i<nums.length ; i++){
        resultArray[i] *= prefix 
        prefix *= nums[i]
    }

    let suffix = 1 
    for(let i=nums.length-1 ; i>= 0 ; i--){
        resultArray[i]*= suffix
        suffix *=  nums[i]
    }
    return resultArray
    
};
