
var hasAlternatingBits = function(n) {
   
	let nBinary = n.toString(2)
	for(let i = 1 ; i<nBinary.length ; i++){
		if(nBinary[i] == nBinary[i-1]){
			return false 
		}
			
	}

	return true 


};




console.log(hasAlternatingBits(11))
