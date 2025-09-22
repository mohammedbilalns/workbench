


var isSubstringPresent = function(s) {
    
	for(let i=0 ; i< s.length-1 ; i++){
		for(let j = s.length-1 ; j>=1 ; j-- ){
			if(s[i]== s[j] && s[i+1] == s[j-1]){
				return true 
			}
		}
	}

	return false 
};




console.log(isSubstringPresent("abcd"))
