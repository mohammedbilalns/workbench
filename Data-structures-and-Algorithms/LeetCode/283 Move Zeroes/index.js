

var moveZeroes = function(nums) {
    
    let length = nums.length 
    for(let i=0;i<length;i++){
        if(nums[i]==0){
            nums.splice(i,1)
            nums.push(0)
            i-- 
            length--
        }
    }
    return nums
};




console.log(moveZeroes([0,0,1]))