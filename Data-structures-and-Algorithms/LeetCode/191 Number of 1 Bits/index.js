

var hammingWeight = function(n) {

    let bin =  n.toString(2)
    let setbits = 0 
    for(let i=0;i<bin.length;i++){
        if(bin[i]==1) setbits++
    }
    return setbits
};


console.log(hammingWeight(11))