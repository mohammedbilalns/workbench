// given an array of random length containing numbers,  find the largest element in the array 

//O(n)T O(1)S
function findLargest(arr: number[]){
	let largest: number = arr[0]
	for(let i=0 ; i< arr.length ; i++){
		if(arr[i]> largest){
			largest = arr[i]
		}
	}
	return largest
}

//console.log(findLargest([32,23,234,23,42532,3432]))

// given array of nubmers find the second largest element of the array 
function findSecondLargest(arr:number[]){

	let largest = arr[0]
	let secondLargest = arr[0]
	for(let i=0 ;  i< arr.length ; i++){
		if(arr[i]> largest){
			secondLargest = largest 
			largest = arr[i]
		}else if(arr[i]> secondLargest){
			secondLargest = arr[i]
		}
	}
	return secondLargest
}
console.log(findSecondLargest([1,2,3,4,5,6]))
// given an array of numbers find the third largest element of the array 
function findThirdLargest(arr:number[]){
	let largest =  -Infinity, secondLargest = -Infinity, thirdLargest = -Infinity
	for(let i=0 ; i< arr.length ; i++)
	if(arr[i]> largest){
		thirdLargest = secondLargest
		secondLargest = largest
		largest = arr[i]
	}else if(arr[i]> secondLargest){
		thirdLargest = secondLargest
		secondLargest = arr[i]
	}else if(arr[i]> thirdLargest){
			thirdLargest = arr[i]
	}
	return thirdLargest
}
