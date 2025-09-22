
// heapfity in maxHeap 
function heapify(arr, n , i){
    let largest = i 
    let leftChildIndex = 2*i+1 
    let rightChildIndex = 2*i+2 

    if(leftChildIndex < n && arr[leftChildIndex] > arr[largest]){
        largest = leftChildIndex
    }
    if(rightChildIndex < n && arr[rightChildIndex] > arr[largest]){
        largest = rightChildIndex 
    }

    if(i !== largest){
        [arr[i], arr[largest]] = [arr[largest], arr[i]]
        heapify(arr,n,largest)
    }
}

function buildMaxHeap(arr){
    let n = arr.length 

    for(let i= Math.floor(n/2) -1; i>= 0 ; i--){
        heapify(arr, n, i)
    }
    return arr 
}

let arr = [5,3,1,2,7,2,9,2]
buildMaxHeap(arr)
console.log(arr)