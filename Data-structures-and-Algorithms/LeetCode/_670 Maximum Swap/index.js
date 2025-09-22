// You are given an integer num. You can swap two digits at most once to get the maximum valued number.

// Return the maximum valued number you can get.

var maximumSwap = function(num) {
    
    let numArr = num.toString().split('').map(Number)

    let maxIndex = 0
    for(let i=1;i<numArr.length;i++){
        if(numArr[i]>numArr[maxIndex]){
            maxIndex = i
        }
    }
    
    if(maxIndex=== 0) return num

    let temp = numArr[maxIndex]
    numArr[maxIndex] = numArr[0]
    numArr[0] = temp 
    return parseInt(numArr.join(''))
}


console.log(maximumSwap(2736))
