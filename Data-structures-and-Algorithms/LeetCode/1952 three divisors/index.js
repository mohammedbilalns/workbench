
// Given an integer n, return true if n has exactly three positive divisors. Otherwise, return false.

// An integer m is a divisor of n if there exists an integer k such that n = k * m.

var isThree = function(n){
    let divisorCount = 0 
    for(let i=2; i<=n;i++){
        if(n%i ===0 ){
            divisorCount++
        }
        if(divisorCount>3) break
    }

    return divisorCount===3 ? true : false
}