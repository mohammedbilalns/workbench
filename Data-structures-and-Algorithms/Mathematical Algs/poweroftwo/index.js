// Given a positive integer ,determine if the number is a power of 2 or not 


// Approach 1 : O(log n) T 
function isPowerTwo(n){
    if(n<1) return false
    while(n>1){
        if(n%2 !== 0) return false
        n = n/2
    }
    return true
}

// Approach 2 : Using bitwise operator : O(1)T

function isPowerTwoBitwise(n){
    if(n<1) return false 
    return( n & (n-1) === 0 )

}

console.log(isPowerTwo(1025))

