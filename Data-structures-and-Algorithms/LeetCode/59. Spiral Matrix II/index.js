

var generateMatrix = function(n){
    let matrix = Array(n).fill().map(() => Array(n).fill(0));	
	
	let left = 0 
	let right = n-1 
	let top = 0 
	let bottom = n-1

	let val = 1 
	while(val <= n*n){
		for(let i= left; i<= right;i++){
			matrix[top][i] = val 
			val++ 
		}
		top++ 

		for(let i= top ; i<= bottom; i++){
			matrix[i][right] = val 
			val++ 
		}
		right--  

		for(let i= right; i>= left ; i--){
			matrix[bottom][i] = val 
			val++ 
		}
		bottom-- 

		for(let i= bottom; i>= top ; i--  ){
			matrix[i][left] = val 
			val++
		}
		left++ 
	}

	return matrix 

}


console.log(generateMatrix(3))
