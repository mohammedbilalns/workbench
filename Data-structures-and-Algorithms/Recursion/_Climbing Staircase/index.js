// Given a staircase of n steps, count the number of distint ways to climb to the top. You can either climb 1 step or 2 steps at a time 

function climbingStairCase(numStep){
    if(numStep <=3) return numStep
    return climbingStairCase(numStep-1) + climbingStairCase(numStep-2)
}


console.log(climbingStairCase(6))

// try iterative way 