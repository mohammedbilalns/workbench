function ascending(arr){
    
    for(let i= 0 ; i<arr.length ; i++){
        let elementToInsert = arr[i]
        let j = i-1 
        while(j>=0 && arr[j]> elementToInsert){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = elementToInsert
        
    }
    return arr 
}



console.log(ascending([7,5,8,2,4,6,1,2,6]))
