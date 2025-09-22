

var containsDuplicate = function(nums) {
    
    let set = [...new Set(nums)]

    let isSame = false
    for(let i=0;i<nums.length;i++){
        if(nums[i]!== set[i]){
            isSame = true
        }
    }
    return isSame

};

// another method with better time complexity 

var containsDuplicate = function(nums) {
    let seen = new Set();
    for(let i = 0; i < nums.length; i++){
        if(seen.has(nums[i])) return true;
        seen.add(nums[i]);
    }
    return false;
};

console.log(containsDuplicate([1,1,1,3,3,4,3,2,4,2]))