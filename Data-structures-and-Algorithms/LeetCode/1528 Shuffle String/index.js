

var restoreString = function(s, indices) {

    let correctedArr = []
    for(let i=0;i<indices.length;i++){
        correctedArr[indices[i]] = s[i]
    }
    return correctedArr.join('')
};


console.log(restoreString("codeleet",[4,5,6,7,0,2,1,3] ))