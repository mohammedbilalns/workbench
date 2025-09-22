//solution of two sum problem using hashmap - O(n)TS 
var twoSum = function(nums, target) {
    
    let map = new Map()

    for(let i=0 ; i<nums.length ;i++){
        let difference = target- nums[i] 

        if(map.has(difference)){
            return [i, map.get(difference)]
        }else {
            map.set(nums[i],i)
        }
    }

};


