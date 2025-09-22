

var sumZero = function(n) {
    
    let outputArr = []
    if(n%2 ==0){

        for(let i=1;i<n/2;i++){
            outputArr.push(i)
            outputArr.push(-i)
        }
    }else{
        outputArr.push(0)
        for(let i=1;i<=(n-1)/2;i++){
            outputArr.push(i)
            outputArr.push(-i)
        }
    }
    return outputArr
};




console.log(sumZero(5))