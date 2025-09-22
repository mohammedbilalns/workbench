var findNumbers = function(nums) {
    
    let stringArr = nums.map(num=> String(num))
    
    let evenDigitCount = 0 
    for(let i=0;i<stringArr.length;i++){
        if(stringArr[i].length %2==0){
            evenDigitCount++
        }
    }
    return evenDigitCount
};


console.log(findNumbers([555,901,482,1771]))