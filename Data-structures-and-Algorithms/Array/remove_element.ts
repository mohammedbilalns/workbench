// given an array and and index remove the lement from the index 
function removeFromIndex(arr:any[], index:number ){

	for(let i=index ; i<arr.length-1 ; i++){
		arr[i] = arr[i+1]
	}
	return arr 
}

const arr  = [0,0,2,3,4,5,6,7,8,9,10]

//removeFromIndex(arr,3)
//console.log(arr)

// given an array and an element remove all the occurance of an element from the array  
function removeElement(arr:any[],element:any){
	for(let i=0; i< arr.length ; i++){
		if(arr[i] == element){
			for(let j=i ; j < arr.length-1 ; j++){
				arr[j] = arr[j+1]
			}
			i-- 
			arr.length-- 
		}

	}
}

//removeElement(arr,0)
//console.log(arr)
// given an array and element remove the first occurance of the matched element from the array 
function removeFirstElementMatching(arr:any[], element:any){
	for(let i=0 ; i< arr.length ; i++){
		if(arr[i]== element){
			for(let j=i ; j < arr.length-1; j++){
				arr[j] = arr[j+1]
			}
			arr.length-- 
			return 
		}
	}
}

removeFirstElementMatching(arr,0)
console.log(arr)
