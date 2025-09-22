// An ant is on a boundary. It sometimes goes left and sometimes right.

// You are given an array of non-zero integers nums. The ant starts reading nums from the first element of it to its end. At each step, it moves according to the value of the current element:

//     If nums[i] < 0, it moves left by -nums[i] units.
//     If nums[i] > 0, it moves right by nums[i] units.

// Return the number of times the ant returns to the boundary.

// O(n)T )(1)S
var returnToBoundaryCount = function (nums){
    let position = 0 
    let zeroCount = 0 
    for(let i=0;i<nums.length;i++){
        position += nums[i]
        if(position === 0 ) zeroCount++
    }
    return zeroCount
}