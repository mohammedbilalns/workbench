function sort(str){
    
    let arr = []
    for(let i=0 ; i<str.length ; i++){
        arr[i] = str[i]
    }
    
    for(let i=1 ; i<arr.length ; i++){
        let elementToInsert = arr[i]
        let j= i-1 
        while(j>=0 && arr[j] > elementToInsert){
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = elementToInsert
    }
    
    let result = ""
    for(let i=0 ; i<arr.length ; i++){
        result+= arr[i]
    }
    
    return result 
    
}


console.log(sort("hello world"))
