

var capitalizeTitle = function(title) {
    
    return title.split(' ').map(word=> {
        if(word.length<=2) return word.toLowerCase()
        return word[0].toUpperCase()+word.slice(1,word.length).toLowerCase()
    }).join(' ')

};




console.log(capitalizeTitle("First leTTeR of EACH Word"))