

function arraySum(arr){
	if(arr.length == 0 ){
		return 0 
	}

	return arr[0]+ arraySum(arr.slice(1))
}

console.log(arraySum([231,1234,123]))
