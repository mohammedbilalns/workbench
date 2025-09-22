


var checkIfExist = function(arr){
	


	for(let i=0 ; i<arr.length-1 ;i++){
		for(let j=i+1 ; j<arr.length ;j++){
			if(2*arr[i] == arr[j]|| 2*arr[j] == arr[i]){
				return true 
			}
		}
	}

	return false 
	
}


console.log(checkIfExist([-10,12,-20,-8,15]))
