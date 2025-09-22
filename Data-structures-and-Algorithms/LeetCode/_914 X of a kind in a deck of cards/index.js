var hasGroupsSizeX = function(deck) {
    
    if(deck.length==1) return false
    let freqObj = deck.reduce((acc,elem)=>{
        acc[elem] = (acc[elem]?? 0)+1 
        return acc 
    }, {})

    let uniqueFrequncies = [...new Set(Object.values(freqObj))]

    return uniqueFrequncies.length ==1 
};



console.log(hasGroupsSizeX([1,1,2,2,2,2]))