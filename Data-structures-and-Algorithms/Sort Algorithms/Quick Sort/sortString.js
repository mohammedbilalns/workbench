
function sortStrings(str){
    
    if(str.length <2){
        return str 
    }
    
    let pivot = str[str.length-1]
    let left = ""
    let right = ""
    
    for(let i = 0 ; i< str.length-1 ; i++){
        if(str[i] < pivot){
            left+= str[i]
        }else{
            right+= str[i]
        }
    }
    
    return sortStrings(left)+pivot+ sortStrings(right)
    
}

console.log(sortStrings("fsdlkjflkdsj"))
