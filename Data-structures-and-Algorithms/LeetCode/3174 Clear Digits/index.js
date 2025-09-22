var clearDigits = function(s) {
    let charStack = []
    for(let i=0;i<s.length;i++){

        if( !isNaN( parseInt(s[i]))){
            charStack.pop()
        }else{
            charStack.push(s[i])
        }
    }
    return charStack.join('')
};



console.log(clearDigits("cb34"))