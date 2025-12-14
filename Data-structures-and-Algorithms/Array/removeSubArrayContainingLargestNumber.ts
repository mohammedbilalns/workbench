
function removeSubArrayContainingLargestArray(arr: number[][]): number[][]{
	let largest = -Infinity 
	let largestSubArrayIndex: number =-1 
	for(let i=0 ; i< arr.length ; i++){
		for(let j=0 ; j< arr[i].length ; j++){
			if(arr[i][j] > largest){
				largest = arr[i][j]
				largestSubArrayIndex = i 
			}
		}
	}
	arr.splice(largestSubArrayIndex,1)
	return arr 
}

console.log(removeSubArrayContainingLargestArray([[10, 2], [3, 4], [5, 6]])
)

