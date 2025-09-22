function sortAlternate(arr){
    
    let swapped = true 
    
    while(swapped){
        swapped = false 
        for(let i= 0 ; i< arr.length-2 ; i+=2){
            if(arr[i+2]< arr[i]){
                [ arr[i], arr[i+2]] = [ arr[i+2], arr[i]]
                swapped = true     
            }
        }
    }
    
    swapped = true 
    
    while(swapped){
        swapped = false 
        for(let i=1 ; i<arr.length-2 ; i+=2){
            if(arr[i+2]> arr[i]){
                [arr[i], arr[i+2]] =  [ arr[i+2], arr[i]]
                swapped = true 
                
            }
        }
    }
    
    return arr 
}


console.log(sortAlternate([2,6,2,7,2,7,2,5,3]))
