
function sortOddIndex(arr){
    
    for(let i=1 ; i<arr.length ; i+=2){
        let elemToInsert = arr[i]
        let j = i-2
        while( j>= 0 && arr[j]> elemToInsert ){
            arr[j+2] = arr[j]
            j-=2
        }
        arr[j+2] = elemToInsert
    }
    return arr 
    
}



console.log(sortOddIndex([4,1,5,12,3,1,3,1,5]))
