// find the index of the element from the array 


const findIndex = (arr: any[], searchVal : any)=>{
	for(let i=0 ; i< arr.length ; i++){
		if(arr[i] == searchVal){
			return i 
		}
	}
	return -1 
}
const arr = [1,2,32,3,4,2,4]
console.log(findIndex(arr,4));

