var reverseWords = function(s) {

    let wordsArr = s.split(" ")
    let reversedwords = wordsArr.map(word=> word.split('').reverse().join(''))
    return reversedwords.join(" ")
    
};


console.log(reverseWords("Let's take LeetCode contest"))