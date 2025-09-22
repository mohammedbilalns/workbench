var lengthOfLastWord = function(s) {
    
    let trimmedStr = s.trim()
    let wordLength = 0 
    for(let i=trimmedStr.length-1;i>=0;i--){
       if(trimmedStr[i]!==" "){
        wordLength++ 
       }else{
        break 
       }
    }
    return wordArr.length 
};


console.log(lengthOfLastWord("Hello world"))