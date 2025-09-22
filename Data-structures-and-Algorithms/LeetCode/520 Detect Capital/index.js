var detectCapitalUse = function(word) {
    let capitalCount = word.split('').reduce((acc,elem)=> acc+= (elem == elem.toUpperCase()?1 :0 ), 0)
    return capitalCount==0 || capitalCount == word.length || (capitalCount ==1 && word[0].toUpperCase() == word[0])

};



console.log(detectCapitalUse("Leetcode"))