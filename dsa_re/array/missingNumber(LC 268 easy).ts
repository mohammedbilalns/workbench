// given an array of numbers from 1 - n with missing one element find that missing element 

function findMissing(arr:number[]){
	const len = arr.length 
	const actualSum = len * (len+1)/2 
	let currSum = 0 
	for(let i=0 ; i<arr.length ; i++){
		currSum+= arr[i]
	}
	return actualSum- currSum
}
