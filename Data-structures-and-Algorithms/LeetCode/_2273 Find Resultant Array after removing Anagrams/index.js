
var removeAnagrams = function(words) {
    

    let sortedWords = words.map(words=> words.split('').sort().join(''))

    console.log(sortedWords)
    for(let i=0;i<sortedWords.length;i++){
        if(sortedWords[i]== sortedWords[i+1]){
            words.splice(i+1,1)
            i--
        }
    }
    return words
};




console.log(removeAnagrams(["abba","baba","bbaa","cd","cd"]))