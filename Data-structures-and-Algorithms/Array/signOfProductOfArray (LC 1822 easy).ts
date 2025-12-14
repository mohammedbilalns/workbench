function arraySign(nums: number[]): number {
    
    let val = 1 
    for(let i=0 ; i< nums.length ; i++){
        if(nums[i] ==0 ) return 0 
        else if(nums[i]<0) val*=-1
    }
    return  val  
};
