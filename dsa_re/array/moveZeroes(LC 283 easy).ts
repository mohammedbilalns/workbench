// given an array of numbers move all the zeroes to the beginning 

function moveZeroesToBeg(arr: number[]){
	let lastNonZeroIndex = arr.length -1 
	for(let i=arr.length-1 ; i>= 0 ;i--){
		if(arr[i] !== 0 ){
			[arr[i], arr[lastNonZeroIndex]] = [arr[lastNonZeroIndex], arr[i]]
			lastNonZeroIndex-- 
		}
	} 
}

const arr = [32,4,2,0,2,3,0,32,0]





// given an array of numbers move all the zeroes to the end of the array 
function moveZeroesToEnd(arr: number[]){
	let firstNonZeroIndex = 0 
	for(let i=0 ; i< arr.length ;i++){
		if(arr[i] !== 0 ){
			[arr[i], arr[firstNonZeroIndex]] = [arr[firstNonZeroIndex], arr[i]]
			firstNonZeroIndex++ 
		}
	} 
}

moveZeroesToEnd(arr)
console.log(arr);

