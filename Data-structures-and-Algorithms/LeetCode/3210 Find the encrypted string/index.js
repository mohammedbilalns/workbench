

var getEncryptedString = function(s, k) {
    
    let encryptedArr = []

    for(let i=0;i<s.length;i++){

        if(i+k<s.length){
            encryptedArr[i] = s[i+k]
        }else{
            encryptedArr[i]= s[(i+k)%s.length]
        }
    }
    return encryptedArr.join("")
};



console.log(getEncryptedString("byd",4))