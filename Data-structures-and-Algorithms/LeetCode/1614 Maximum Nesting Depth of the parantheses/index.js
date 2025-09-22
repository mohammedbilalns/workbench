

var maxDepth = function(s){

    let maxDepth = 0 
    let currentDepth = 0 

    for(let i=0;i<s.length;i++){
        if(s[i]==='('){
            currentDepth++
        }if(s[i]===')'){
            maxDepth = currentDepth> maxDepth ? currentDepth : maxDepth
            currentDepth--
        }
    }
    return maxDepth
}

console.log(maxDepth("(1)+((2))+(((3)))"))