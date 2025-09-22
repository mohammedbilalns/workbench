

function selectionSort(arr){
    
    for(let i=0 ;i<arr.length ;i++){
        let smallestIndex = i 
        for(let j=i+1 ; j<arr.length ;j++){
            if(arr[j]< arr[smallestIndex]){
                smallestIndex = j 
            }
        }
            [ arr[i], arr[smallestIndex]] = [ arr[smallestIndex], arr[i]]

    }
    
    return arr
    
}


console.log(selectionSort([1,4,2,4,6,1,3,4,6]))
