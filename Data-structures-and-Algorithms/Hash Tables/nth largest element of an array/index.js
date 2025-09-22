// given an arary and an index find the nth largest element from the array 

function nthLargest(arr, n){

    let freqMap = new Map()

    for(let elem of arr){
        freqMap.set(elem,(freqMap.get(elem)||0)+1 )
    }

    let uniqueElements = Array.from(freqMap.keys())
    uniqueElements.sort((a,b)=> a-b)
    return uniqueElements[n-1]
}


console.log(nthLargest([5,2,6,2,4,3],3))