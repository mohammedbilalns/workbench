

function heapify(arr, n , i){

    let largest = i 
    let leftChildIndex = 2*i+1 
    let rightChildIndex = 2*i+2 

    if(leftChildIndex< n && arr[leftChildIndex] > arr[largest]){
        largest = leftChildIndex 
    }
    if(rightChildIndex < n && arr[rightChildIndex] > arr[largest]){
        largest = rightChildIndex 
    }

    if(largest !== i ){
        [arr[i], arr[largest]] = [ arr[largest], arr[i]]
        heapify(arr, n, largest)
    }
}


function heapSort(arr){
    let n = arr.length 

    for(let i= Math.floor(n/2) -1 ; i>= 0 ; i--){
        heapify(arr, n, i)
    }

    for(let i= n-1 ; i>= 0 ;i-- ){
        [arr[0], arr[i]] = [ arr[i], arr[0]] 
        heapify(arr,i, 0)
    }

    return arr 
}


console.log(heapSort([5,2,7,2,8,3,9]))