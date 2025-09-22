function sortOdd(arr){
    if(arr.length <3) return arr
    let swapped = true 
    
    while(swapped){
        swapped = false 
         for(let i = 1 ; i < arr.length-2 ; i+=2){
             if(arr[i+2]< arr[i]){
                 [ arr[i+2], arr[i]] = [ arr[i], arr[i+2]]
                 
                 swapped = true 
             }
        
        }
    }
    
    return arr 
   
}


console.log(sortOdd([8,2,5,2,2,3,25,4]))
