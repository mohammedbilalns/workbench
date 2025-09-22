

var findDuplicate = function(nums) {
  
    let sortedArr = nums.sort((a,b)=>a-b)

    for(let i=0;i<nums.length;i++){
        if(sortedArr[i]=== sortedArr[i+1]){
            return sortedArr[i]
        }
    }

};


console.log(findDuplicate([3,1,3,4,2]))