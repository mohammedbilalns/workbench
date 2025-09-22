


var maximumOddBinaryNumber = function(s) {
    let movableOneIndex = 0 
    let lastZeroIndex=0 
    for(let i=0;i<s.length;i++){
        if(s[i]=="0") lastZeroIndex = i 
    }
    for(let i=0;i<lastZeroIndex;i++){
        if(s[i]=="1") movableOneIndex = i 
    }
    
    return s.slice(0,movableOneIndex)+"0"+s.slice(movableOneIndex+1, lastZeroIndex)+"1"
};


console.log(maximumOddBinaryNumber("0101"))



