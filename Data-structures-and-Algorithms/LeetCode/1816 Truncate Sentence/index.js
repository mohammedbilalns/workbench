

var truncateSentence = function(s, k) {

    let wordsArr = s.split(" ")
    return wordsArr.slice(0,k).join(' ')
};



console.log(truncateSentence("Hello how are you Contestant",4))