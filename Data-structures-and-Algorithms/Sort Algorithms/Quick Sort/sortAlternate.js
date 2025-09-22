// sort odd elements by ascending and even elements by descending order 

function quickSort(arr){
    
    if(arr.length<2){
        return arr 
    }
    
    let pivot = arr[arr.length-1]
    let left = []
    let right = []
    
    for(let i=0 ; i< arr.length-1; i++){
        
        if(arr[i]< pivot){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    
    return [...quickSort(left), pivot, ...quickSort(right)]
}

function sortAlternate(arr){
    let evens = []
    let odds = []
    
    for(let i=0 ;i<arr.length ; i++){
        if(arr[i]%2 ==0 ){
            evens.push(arr[i])
        }else{
            odds.push(arr[i])
        }
    }
    
    let sortedOdds= quickSort(odds)
    let sortedEvens = quickSort(evens).reverse()
    let oddIndex = 0 
    let evenIndex = 0 
    
    for(let i=0 ;i<arr.length ; i++){
        if(arr[i]%2 ==0){
            arr[i] = sortedEvens[evenIndex]
            evenIndex++
        }else {
            arr[i] = sortedOdds[oddIndex]
            oddIndex++ 
        }
    }
    
    return arr 
}


console.log(sortAlternate([1, 5, 8, 3, 6, 2, 5, 3, 5, 2, 9]))

