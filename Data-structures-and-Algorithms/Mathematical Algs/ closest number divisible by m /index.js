//Given two integers n and m (m != 0). Find the number closest to n and divisible by m. If there is more than one such number, then output the one having maximum absolute value.

// Naive approach check from n-m to n+m  O(m)T O(1)S 

function closestDivisible (n , m ){

	let closest = 0 
	let minDifference = Infinity 

	for(let i=n-Math.abs(m);i<=n+ Math.abs(m);i++){

		if(i%m == 0 ){
			let difference = Math.abs(n-i)

			if(difference< minDifference || (difference === minDifference && Math.abs(i)> Math.abs(closest))){
				closest = i 
				minDifference = difference 
			}
		}
	}
	return closest 

}

// More efficient one - O(1)TS - 

function closestNumber2(n, m ) {
	let q = parseInt(n/m)

	let n1 = m* q 

	let n2 = (n*m)>0 ? (m* (q+1)) : (m*(q-1))

	if(Math.abs(n-n1) < Math.abs(n-n2)){
		return n1 
	}
	return n2 
}
