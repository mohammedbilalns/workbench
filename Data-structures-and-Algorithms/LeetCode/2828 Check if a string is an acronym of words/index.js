

var isAcronym = function(words, s) {
    
    let acronym = words.map(word=> word[0]).join('')
     return (acronym == s)
};


console.log(isAcronym(["an","apple"],"a" ))