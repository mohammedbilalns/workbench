

function findFirstandLast(arr, target){

	function findFirst(arr, target){
		let left = 0 
		let right = arr.length-1 
		let result = -1 

		while(left <= right){

			let mid = Math.floor((left+ right)/2)

			if( arr[mid] == target){
				result = mid 
				right = mid-1 
			}else if( arr[mid] < target){
				left = mid+1 
			}else {
				right = mid-1 
			}
		}
	return result	

	}

	function findLast(arr, target){
		let left = 0 
		let right = arr.length -1 
		let result = -1 

		while(left<=right){

			let mid = Math.floor((left+right)/2)

			if(arr[mid] == target){
				result = mid 
				left = mid + 1 
			}else if(arr[mid] < target){
				left = mid+1 
			}else {
				right = mid-1 
			}
		}

		return result
	}

	if(findLast(arr, target) == -1) return [-1 , -1 ]

	const firstOcc = findFirst(arr, target)
	const lastOcc = findLast(arr , target)

	return [firstOcc, lastOcc]
}

const arr = [2,2,3,3,4,4,4,5,6]


console.log(findFirstandLast(arr,6))
