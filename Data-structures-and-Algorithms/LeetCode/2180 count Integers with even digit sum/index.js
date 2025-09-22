

var countEven = function(num){

    let evenSumCount = 0 
    for(let i=2;i<=num;i++){

        let numString = String(i)
        let digitArray = numString.split('')
        let digitSum = 0 
        digitArray.forEach(elem =>{
            numElem = parseInt(elem)
            digitSum += numElem
        })

        if(digitSum%2 === 0 ){
            evenSumCount++
        }

    }

    return evenSumCount
}


console.log(countEven(30))