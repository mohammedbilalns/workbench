

var sortSentence = function(s) {
    
    let wordsIndArr = []
    let wordsOrderedArr = []
    let wordsArr = s.split(' ')

    wordsArr.forEach(word=>{
        let postion = parseInt(word[word.length-1])
        let currentWord = word.slice(0,word.length-1)
        wordsIndArr.push([postion,currentWord])
    })

    wordsIndArr.forEach((elem)=>{
        wordsOrderedArr[elem[0]] = elem[1] 
    })

    let word = wordsOrderedArr.join(' ')

    return word.trim()

};






console.log(sortSentence("is2 sentence4 This1 a3"))