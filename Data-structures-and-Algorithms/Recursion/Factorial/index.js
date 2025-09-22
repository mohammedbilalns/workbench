// given an integer find the factorial of the number 

// approach 1 : O(n)T
function factorial(n){
    let factorial = 1;
    
    for(let i=2;i<=n;i++){
        factorial *= i
    } 
    return factorial
}

//approach 2 : recursive 

function factorialRec(n){
    if(n==0) return 1
    return factorialRec(n-1) * n
}

console.log(factorialRec(10))
