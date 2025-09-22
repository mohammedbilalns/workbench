var repeatedNTimes = function(nums) {
    
    let arr = []
    for(let num of nums){
        if(arr.includes(num)){
            return num 
        }
        arr.push(num)
    }
};



console.log(repeatedNTimes([1,2,3,3]))