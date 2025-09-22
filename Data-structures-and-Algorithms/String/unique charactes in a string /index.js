

function findUniqueCharacters(str){
    let set = new Set()
    let result = ""

    for(let char of str){
        if(!set.has(char)){
            set.add(char)
            result+= char 
        }
    }
    return result
}

console.log(findUniqueCharacters("fsdkjhfsiwyuegrui"))

