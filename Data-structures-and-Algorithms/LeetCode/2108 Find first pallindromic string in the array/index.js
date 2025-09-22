var firstPalindrome = function(words) {
    
    let reversedWords = words.map(word => word.split('').reverse().join(''))
    for(let i=0;i<words.length;i++){
        if(words[i]== reversedWords[i]) return words[i]

    }
    
    return ""

};

console.log(firstPalindrome(["def","ghi"]))