function sortStrings(str){
    
    let arr = []
    for(let i=0 ; i< str.length ; i++){
        arr[i] = str[i]
    }
    
    let swapped = true 
    while(swapped){
        swapped = false 
        for(let i=0 ; i < arr.length-1 ; i++){
            if(arr[i+1]< arr[i]){
                [ arr[i], arr[i+1]] = [ arr[i+1], arr[i] ]
                swapped = true 
            }
        }
    }
    
    let result = ""
    for(let i=0 ; i< arr.length ; i++){
        result+= arr[i]
    }
    
    return result 
}



console.log(sortStrings("fsdkljhfkdjslhf"))
