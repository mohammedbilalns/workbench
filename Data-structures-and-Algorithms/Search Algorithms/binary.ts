// useful for sorted arrays 
// O(log n )

function binarySearch<T>(arr:T[], value: T): number {
	let start = 0 
	let end = arr.length-1 

	while(start <= end){
		const mid = Math.floor((start + end)/2)
		if(arr[mid] == value) return mid 
		if(value> arr[mid]){
			start = mid+1  
		}else if(value< arr[mid]){
			end = mid-1  
		}
	}
	return -1 
}

console.log(binarySearch([1,2,3,4,5,6,7],4))
