

var selfDividingNumbers = function(left, right) {
    
    let selfDividingNumbers = []

    for(let i=left;i<=right;i++){

        let stringNum = String(i)
        let digitArr = stringNum.split('').map(elem => parseInt(elem)) 
        let isSelfDividing = true
        digitArr.forEach(elem =>{
            if(i%elem !==0){
                isSelfDividing = false
            }
        })
        if(isSelfDividing) selfDividingNumbers.push(i)
    }

    return selfDividingNumbers
};

console.log(selfDividingNumbers(47,85))