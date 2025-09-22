

var countPrimes = function(n) {


    let isPrime = (x)=>{
        if(n<2) return false 

        for(let i=2;i*i<=x;i++){
            if(x%i === 0 ) return false
        }
        return true
    }

    let primeCount = 0 
    for(let i=2;i<n;i++){
        if(isPrime(i)){
            primeCount++
        }
    }

    return primeCount
    
};


console.log(countPrimes(90000))