

function sortOnlyOdd(arr){

	for(let i=1 ; i<arr.length ; i+=2 ){
		let smallestIndex = i 
		for(let j=i ;j<arr.length ; j+=2 ){
			if(arr[j]< arr[smallestIndex]){
				smallestIndex = j 
			}
		}
		[arr[i], arr[smallestIndex]] = [arr[smallestIndex], arr[i]]
	}
	return arr 
}


console.log(sortOnlyOdd([1,9,8,7,4]))
