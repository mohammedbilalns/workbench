// Given an integer n find the sum of first n natural numbers 

// iterative  $O(n)$
function sumNatural(n){

	let sum = 0 
	for(let i =1 ;i<=n;i++){
		sum+= i 
	}
	return sum 
}

// using formula  $O(1)$
function sumNatuarl2(n){

	return n * (n+1)/2 
}

// formula with  avoid integer overflow  $O(1)$

function sumNatural3(n){

	if(n%2==0){
		return (n/2)*(n+1)
	}else{
		return ((n+1)/2)*n 
	} 
}

// with recursion $O(n)$


function sumNatural4(n){
	if(n ==0){
		return 0 
	}
	return n + sumNatural4(n-1)
}

console.log(sumNatural3(5))
