// first Method 
var longestCommonPrefix2 = function(strs) {
    
    let longestLength = strs.reduce((acc, elem)=>{
        return acc = elem.length> acc? elem.length: acc 
    }, 0)

    let chars = []

    for(let i=0;i<longestLength;i++){
        let isEqual = true 
        let char = strs[0][i]
        for(let j=1;j<strs.length;j++){
            if(strs[j][i]!== char){
                isEqual = false
            }
        }
        if(isEqual){
            chars.push(char)
        }else{
            break
        }

    }

    return chars.join('')
};                                                   


var longestCommonPrefix = function(strs){
	let commonPrefix = ""
	let firstWord = strs[0]

	for(let i = 0 ; i <firstWord.length ; i++){
		let char = firstWord[i]

		for(let j=0 ; j < strs.length ; j++){

			if(char!== strs[j][i]){
				return commonPrefix
			}
		}
		commonPrefix+= char 

	}
	return commonPrefix

}

console.log(longestCommonPrefix(["flower","flow","flight"]))
