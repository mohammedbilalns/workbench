var differenceOfSums = function(n, m) {
    
    let sum = 0 
    for(let i=1;i<=n;i++){
        if(i%m ===0 ){
            sum -= i
        }else{
            sum+=i
        }
    }
    return sum 
};


console.log(differenceOfSums(5,6))