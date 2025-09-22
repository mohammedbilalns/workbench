
// Brute Force - $O(n^2)T $
var maxArea1 = function(height){

	let maxArea = 0 

	for(let i= 0 ; i < height.length ; i ++ ){

		for(let j = i+1 ;  j < height.length ; j++){
			
			let h =  height[i] < height[j] ? height[i] : height[j]
			let w = j-i 
			let cA = h*w 
			maxArea = maxArea > cA ? maxArea : cA 


		}
	}

	return maxArea
}



// Two Pointer Approach - $O(n)$

var maxArea = function(height){
	let maxArea = 0 
	let left = 0 
	let right = height.length 

	while(left < right){
		let currArea  
		if(height[left]< height[right]){
			 currArea = height[left] * (right-left)
			left++ 
		}else {
			currArea = height[right] * (right-left)
			right-- 
		}

		maxArea = currArea > maxArea ? currArea : maxArea
	}

	return maxArea
}


console.log(maxArea([1,8,6,2,5,4,8,3,7]))
