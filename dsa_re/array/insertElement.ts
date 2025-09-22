// given an array element and an index insert the element to that index 

function insertElement(arr:any[],element:any, index:number){
	arr.length = arr.length+1 
	for(let i=0 ; i< arr.length; i++){
		if(i == index){
			for(let j= arr.length-1 ; j>i ; j--){
				arr[j] = arr[j-1]
			}
			arr[i] = element
			break
		}
	}
}
const arr = [1,2,3,4,5,6]
insertElement(arr,10, 3)
console.log(arr);

