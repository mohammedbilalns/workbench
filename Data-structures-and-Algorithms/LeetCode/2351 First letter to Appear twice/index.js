var repeatedCharacter = function(s) {
  
    let charSet = new Set()
    for(let i=0;i<s.length;i++){
        if(charSet.has(s[i])){
            return s[i]
        }else{
            charSet.add(s[i])
        }
    }
};


console.log(repeatedCharacter("abcdd"))