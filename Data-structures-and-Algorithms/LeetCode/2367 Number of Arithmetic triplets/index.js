var arithmeticTriplets = function(nums, diff) {

    let tripletCount = 0 
    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            for(let k=j+1;k<nums.length;k++){
                if(nums[j]-nums[i]==diff && nums[k]-nums[j]==diff){
                    tripletCount++
                }
            }
        }
    }
    return tripletCount
};



console.log(arithmeticTriplets([4,5,6,7,8,9],2))