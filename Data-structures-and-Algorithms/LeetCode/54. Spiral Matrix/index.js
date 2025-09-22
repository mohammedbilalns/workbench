

var spiralOrder = function(matrix) {
    
	let left = 0 
	let top = 0 
	let bottom = matrix.length-1
	let right = matrix[0].length-1 
	
	let size = (matrix.length)* (matrix[0].length)
	let resultArr = []
	
	let digitCount  = 0 

	while(digitCount < size ) {

		for(let i= left; i<= right; i++){
			resultArr.push(matrix[top][i])
			digitCount++
		}
		top++ 
		for(let i= top; i<= bottom ; i++){
			resultArr.push(matrix[i][right])
			digitCount++ 
		}
		right-- 
		for(let i= right; i>=left; i-- ){
			resultArr.push(matrix[bottom][i])
			digitCount++ 
		}
		bottom-- 
		for(let i= bottom; i>= top; i--){
			resultArr.push(matrix[i][left])
			digitCount++ 	
		}
		left++ 

	}

	return resultArr
	

};



console.log( spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
