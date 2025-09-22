// given a natural number n determine if the number is prime or not 


// Approach 1 O(sqrt(n))T
function isPrime(n){
    if(n<2) return false 

    for(let i=2;i <=Math.sqrt(n);i++){
        if(n%i === 0 ) return false
    }
    return true
}

console.log(isPrime(50))
