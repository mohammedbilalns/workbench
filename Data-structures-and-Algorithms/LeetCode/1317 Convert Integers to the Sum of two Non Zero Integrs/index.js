

var getNoZeroIntegers = function(n) {

    for(let i=1;i<n;i++){
        let b = n-i 
        let strNum = String(i)+String(b)
        if(!strNum.includes("0")) return [i,b]
     }
    
    
};

console.log(getNoZeroIntegers(11))