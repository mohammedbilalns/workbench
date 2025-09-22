

var substractProductAndSum = function(n){

    let stringNum = String(n)
    let digitsArray = stringNum.split('')

    let digitsSum = digitsArray.reduce((acc, elem)=>{
        acc += parseInt(elem)
        return acc
    },0)

    let digitsProduct = digitsArray.reduce((acc, elem)=>{
        acc *= parseInt(elem)
        return acc
    },1)

    if(digitsSum> digitsProduct) return (digitsSum - digitsProduct)

    return (digitsProduct - digitsSum)

}


console.log(substractProductAndSum(4421))