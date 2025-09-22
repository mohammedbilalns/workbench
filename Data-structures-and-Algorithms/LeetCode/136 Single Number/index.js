
// first method 
var singleNumber = function(nums) {

    let indObj = {}

    for(let num of nums){
        indObj[num] = (indObj[num] ?? 0) +1
    }
    for(let num in indObj){
        if(indObj[num]==1) return num
    }
    
};
// another method 
var singleNumber2 = function(nums){
    let dp = 0 
    for(let num of nums){
        dp = dp^num 

    }
    return dp
}


console.log(singleNumber2([4,1,2,1,2]))