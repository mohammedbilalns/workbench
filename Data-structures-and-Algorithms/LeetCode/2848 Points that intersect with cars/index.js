
var numberOfPoints = function(nums) {
    let integerStack = [];

    for (let i = 0; i < nums.length; i++) { 
        let start = nums[i][0];
        let end = nums[i][1];

        for (let j = start; j <= end; j++) {
            if (!integerStack.includes(j)) {
                integerStack.push(j);
            }
        }
    }

    return integerStack.length; };





console.log(numberOfPoints([[3,6],[1,5],[4,7]]))
