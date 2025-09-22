var sumOfMultiples = function(n) {
    
    let multipleSum = 0 
    for(let i=1;i<=n;i++){
        if(i%3==0 || i%5==0 || i%7 ==0){
            multipleSum += i 
        }
    }

    return multipleSum 
};





console.log(sumOfMultiples(7))
