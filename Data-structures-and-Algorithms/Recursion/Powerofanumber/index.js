
// O(exp)
//without recursion 

function power2(base , exp){

	let result = base  
	for(let i=2;i<=exp;i++){
		result*= base
	}
	return result
}

function power(base , exp){
	if(exp==0 ) return 1 

	return power(base, exp-1)* base 
}

console.log(power2(-4,3))
