function findMaxAverage(nums: number[], k: number): number {
    
        let  currSum = 0 
        for(let i=0 ; i< k ; i++){
            currSum+= nums[i]
        }
        let  maxSum  = currSum 

        for(let i=k ; i< nums.length ; i++){
            currSum = currSum + nums[i] - nums[i-k]
            maxSum = Math.max(currSum, maxSum )
        }
        return maxSum/k
};
