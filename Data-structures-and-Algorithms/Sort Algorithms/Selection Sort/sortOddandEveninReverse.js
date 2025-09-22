
function sort(arr){
	
	for(let i = 0 ;i<arr.length ; i+=2){
		let smallest = i 
		for(let j= i+2; j< arr.length ; j+=2 ){
			if(arr[j]< arr[smallest]){
				smallest = j 
			}
		}
		[ arr[i], arr[smallest]] = [ arr[smallest], arr[i]]
	}

	for(let i = 1 ; i<arr.length ; i+=2 ){
		let largest = i 
		for(let j= i+2; j< arr.length ; j+= 2){
			if(arr[j]> arr[largest]){
				largest = j 
			}
		}

		[ arr[i], arr[largest]] = [ arr[largest], arr[i]]
	}
	
	return arr 
}


console.log(sort([8,5,9,2,4,6,1,0]))
