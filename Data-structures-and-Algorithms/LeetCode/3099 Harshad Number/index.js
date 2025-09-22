

var sumOfTheDigitsOfHarshadNumber = function(x){

    const stringNum = String(x)
    const stringArr  = stringNum.split('')

    let digitSum = stringArr.reduce((acc, elem)=>{
        acc+= parseInt(elem)
        return acc
    }, 0)

    
    if(x%digitSum === 0 ){
        return digitSum
    }
    return -1
}

console.log(sumOfTheDigitsOfHarshadNumber(23))