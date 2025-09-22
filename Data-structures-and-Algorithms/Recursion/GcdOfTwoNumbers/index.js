
function gcdofTwo(a,b){
	
	if(b>a){
		[a,b] = [b,a]
	}

	if(b ==0){
		return a 
	}
	return gcdofTwo(b, a%b)
}

console.log(gcdofTwo(30,60))
