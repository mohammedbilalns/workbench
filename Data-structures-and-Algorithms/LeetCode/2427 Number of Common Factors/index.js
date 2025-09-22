// Given two positive integers a and b, return the number of common factors of a and b.

var commonFactors = function(a,b){
    if(b>a){
        let temp = a 
        a = b 
        b = temp 
    }

    let gcd = function(a,b){
        if(b=== 0 ) return a 
        return gcd(b, a%b)
    }
    let gcdAb = gcd(a,b)
    let divisorCount = 0 
    for(let i=1;i<= gcdAb;i++){
        if(gcdAb %i ===0){
            divisorCount ++
        }
    }

    return divisorCount

}


console.log(commonFactors(25,30))
