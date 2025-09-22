

// first Method 
var leftRightDifference = function(nums) {
    let leftSum = 0 
    let rightSum = 0 
    let differenceArr = []
    for(let i=0;i<nums.length;i++){
        leftSum = nums.slice(0,i).reduce((elem,acc)=> acc+elem,0)
        rightSum = nums.slice(i+1).reduce((elem,acc)=> acc+elem,0)
        differenceArr.push(Math.abs(leftSum-rightSum))
    }

    return differenceArr
};

// second method 
var leftRightDifference2 = function(nums){
    let totalSum = nums.reduce((elem, acc)=> acc+elem, 0)
    let leftsum = 0 
    let differenceArr = []

    for (let num of nums){
        differenceArr.push( Math.abs(totalSum - num - 2*leftsum))
        leftsum += num
    }

    return differenceArr
}



console.log(leftRightDifference2([1]))

