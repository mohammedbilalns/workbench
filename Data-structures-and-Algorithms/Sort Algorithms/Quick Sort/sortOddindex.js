// sort only odd indexes using quick sort 
function quickSort(arr){
    if(arr.length< 2) return arr 
    
    let left = []
    let right = []
    let pivot = arr[arr.length-1]
    
    for(let i=0 ; i< arr.length-1 ; i++){
        if(arr[i]< pivot){
            left.push(arr[i])
        }else {
            right.push(arr[i])
        }
    }
    return [...quickSort(left), pivot, ...quickSort(right)]
}

function sortOdd(arr){
    
    let oddValues = []
    
    for(let i=1 ; i< arr.length ; i+=2){
        oddValues.push(arr[i])
    }
    
    let sorted = quickSort(oddValues)
    
    for(let i=1; i<arr.length ; i+=2 ){
        arr[i] = sorted[(i-1)/2]
    }
    
    return arr 
    
}


console.log(sortOdd([1,5,8,3,6,2,5,3,5,2,9]))
