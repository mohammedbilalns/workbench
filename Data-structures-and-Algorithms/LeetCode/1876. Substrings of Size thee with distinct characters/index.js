

var countGoodSubstrings = function(s) {
	
	if(s.length<3){
        return 0 
    }
	let count = 0 
	let left = 0
	
	while(left!== s.length-2){
		if(s[left] !== s[left+1] && s[left] !== s[left+2] && s[left+1] !== s[left+2]){
			count++ 
		}
		left++ 
	}
	return count 
};



console.log(countGoodSubstrings("xyzzaz"))
