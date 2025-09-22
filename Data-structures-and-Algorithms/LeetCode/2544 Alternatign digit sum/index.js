

var alternateDigitSum = function(n) {
    let stringNum = String(n)
    let digitArr = stringNum.split('').map(elem=> parseInt(elem))
    let sum = 0 

    for(let i=0;i<digitArr.length;i++){
        if(i%2==1){
            sum-= digitArr[i]
        }else{
            sum+= digitArr[i]
        }
    }
    return sum
};



console.log(alternateDigitSum(111))