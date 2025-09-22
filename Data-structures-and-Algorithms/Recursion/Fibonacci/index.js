// Given a number n find the first n numbers of fibonacci sequence 

// Approach 1 -  O(n)T
function generateFibonacci(n){
    let sequence = [0,1]
    
    for(let i=2;i<n;i++){
        sequence[i] =  sequence[i-1]+sequence[i-2]
    }
    return sequence
}

// given a number 'n', find the nth element of the fibonacci sequence 

// Approach 1 - O(2^n)T
function nthFibonacci(n){
	if(n ==0 ) return 0 
	if(n ==1) return 1

	return nthFibonacci(n-1)+ nthFibonacci(n-2)

}

// Approach 2 - 

function nthFibonacciIt(n){
	if(n ==0 ) return 0 
	if(n == 1) return 1

	let prev = 0 
	let curr = 1 
	
	for(let i=2;i<=n;i++){
		let temp = curr 
		curr = prev + curr 
		prev = temp 
	}
	return curr 
}

console.log(nthFibonacciIt(11))
