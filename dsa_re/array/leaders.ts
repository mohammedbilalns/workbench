
// Given an array find all the leaders in the array , an element is said to be the leader of the array if all the remaining elements after it is less than that element 
function getLeaders(arr: number[]): number[]{
	let len = arr.length 
	const leaders : number[] = []
	let maxFromRight  = -Infinity

	for(let i=len-1 ; i>= 0 ; i--){
		if(arr[i]> maxFromRight){
			leaders.push(arr[i])
			maxFromRight = arr[i]
		}
	}

	return leaders 
}
