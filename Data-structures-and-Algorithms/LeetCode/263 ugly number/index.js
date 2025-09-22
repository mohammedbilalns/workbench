var isUgly = function(n) {
    
	for(let i=5;i<=Math.abs(n)/2;i++){
		if(i==5) continue
		if(n%i==0){
			return false 
		}
	}
	return true
};



console.log(isUgly(-2147483648))
