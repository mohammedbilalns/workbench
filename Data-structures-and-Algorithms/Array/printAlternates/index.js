// given an array return all the alternative elements of the arry O(n)T 
function printAlternates(arr){
	let alternateArr = []

	for(let i=0;i<arr.length;i+=2){
		alternateArr.push(arr[i])
	}
	return alternateArr
}


// Recursive Approach 
function printAlternateRecursive(arr, index = 0 ){

	if(index >= arr.length){
		return  []
	}// base case 
	return [arr[index], ...printAlternateRecursive(arr,index+2)]

}

console.log(printAlternateRecursive([23,123,1232,31,323,2323]))
