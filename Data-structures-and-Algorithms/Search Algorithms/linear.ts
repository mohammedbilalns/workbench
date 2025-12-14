//O(n)T
function linearSearch<T>(arr:T[],value: T):number{

	for(let i=0 ; i< arr.length ; i++){
		if(arr[i] == value){
			return i 
		}
	}
	return -1 
}

console.log(linearSearch([1,2,3,4,5,6,7],5))
