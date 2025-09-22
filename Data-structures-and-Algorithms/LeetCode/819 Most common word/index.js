

var mostCommonWord = function(paragraph, banned) {
    
    let wordArr = paragraph.toLowerCase().split('.').join('').split(' ')
    
    let filteredArr = wordArr.filter(word => !banned.includes(word))

    let countObj = filteredArr.reduce((acc, elem)=>{
        acc[elem] = (acc[elem]?? 0)+1 
        return acc 
    }, {})

    return Math.max(...Object.values(countObj))
};



console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.", ["hit"]))