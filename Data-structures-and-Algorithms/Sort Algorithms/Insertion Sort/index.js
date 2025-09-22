// Given an array of integers, sort the array 


// O(n^2)T 
function insertionSort(arr){

	for(let i=1;i<arr.length;i++){
		let elementToInsert = arr[i]

		let j = i-1 
		while(j>= 0 && arr[j]> elementToInsert){
			arr[j+1] = arr[j]
			j-- 
		}
		arr[j+1]  = elementToInsert

	}
	return arr
}

console.log(insertionSort([2,4,10,3,5,2,15,10]))
