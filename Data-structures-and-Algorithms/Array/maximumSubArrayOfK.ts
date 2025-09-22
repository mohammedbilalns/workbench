
// given an array and an interger find the subArray with length k and largest sum 
//  sliding window 
function findMaximumSubArrayK(arr: number[], k:number): number{
	let currSum = 0 
	for(let i=0 ; i< k ; i++){
		currSum += arr[i]
	}
	let maxSum = currSum 

	for(let i= k ; i< arr.length ; i++){
			currSum = currSum+ arr[i] - arr[i-k]
			maxSum = Math.max(currSum, maxSum)
	}
	return maxSum
}

