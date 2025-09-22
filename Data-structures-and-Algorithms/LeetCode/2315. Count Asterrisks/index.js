



var countAsterisks = function(s) {

	let count = 0 
	let dec = 0 

	for(let i =0 ; i<s.length ; i++){
		if(s[i] == "|"){
			dec = (dec+1)%2 
		}else if(s[i] == "*" && dec == 0 ){
			count++ 
		}
	}

	return count
};




console.log(countAsterisks("yo|uar|e**|b|e***au|tifu|l"))
