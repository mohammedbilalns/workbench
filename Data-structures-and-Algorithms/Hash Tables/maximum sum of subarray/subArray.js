
// Given an array of integers find the subArray with the largest sum from it 

function maxSubAray(arr){

	let maxSum = arr[0]
	let currSum = arr[0]
	let start = 0 
	let end = 0
	let tempStart = 0 

	for(let i=1 ;i<arr.length ;i++){
		if(arr[i]+ currSum > arr[i]){ 
			currSum = arr[i]+ currSum 
		}else{
			currSum = arr[i]
			tempStart = i 
		}

		if(currSum > maxSum){
			start = tempStart 
			maxSum = currSum
			end = i 
		}
	}

	return {sum: maxSum, Array:  arr.slice(start, end + 1)}
	
}

console.log(maxSubAray([-2,1,-3,4,-1,2,1,-5,4]))
