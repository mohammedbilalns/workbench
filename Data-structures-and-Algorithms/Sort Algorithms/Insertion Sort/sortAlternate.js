
function sortAlternate(arr){
    
    for(let i=0 ; i<arr.length ; i+=2){
        let elementToInsert = arr[i]
        let j = i -2 
        
        while(j>=0 && arr[j]> elementToInsert){
            arr[j+2] = arr[j]
            j-=2 
        }
        arr[j+2] = elementToInsert
    }
    

    
    
        for(let i=1 ; i<arr.length ; i+=2){
        let elementToInsert = arr[i]
        let j = i -2 
        
        while(j>=0 && arr[j]< elementToInsert){
            arr[j+2] = arr[j]
            j-=2 
        }
        arr[j+2] = elementToInsert
    }
    
    
    return arr 
}


console.log(sortAlternate([9,2,2,1,5,1,2,6,1,2,6,2,3,5]))
