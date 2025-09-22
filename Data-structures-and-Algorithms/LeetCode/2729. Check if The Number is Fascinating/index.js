
var isFascinating = function(n) {
    
	let stack = ['1','2','3','4','5','6','7','8','9']
	let total = String(n) + String(2*n) + String(3*n)

	for(let char of stack ){
		if(!total.includes(char)){
			return false 
		}

		if(total.indexOf(char) !== total.lastIndexOf(char) ){
			return false 
		}
	}
	
	return true 

};



console.log(isFascinating(100))
