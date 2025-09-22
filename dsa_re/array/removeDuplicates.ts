// given an array of elements remove duplicate elements from it 

// creates new array without duplicates  
function removeDuplicatesArray<T>(arr:T[]){
	return [...new Set(arr)]
}
const arr = [1,1,2,3,4,5,4]

function removeDuplicates<T>(arr:T[]):T[]{
	const seen = new Set()

	return arr.filter(elem=> {
		if(seen.has(elem)){
			return null 
		}else{
			seen.add(elem)
			return elem 
		}
	})

}
// removes from the original array itself 
function removeDuplicatesFromArray<T>(arr:T[]){
	const seen = new Set()
	for(let i=0 ; i< arr.length ; i++){
		if(seen.has(arr[i])){
			for(let j=i ; j< arr.length-1; j++){
				arr[j] = arr[j+1]
			}
			i-- 
			arr.length-- 
		}else{
			seen.add(arr[i])
		}
	}
}

// linear solution 
function removeDuplicatesLinear<T>(arr: T[]): T[]{
	const seen = new Set()
	const res : T[] = []

	for(let elem of arr){
		if(!seen.has(elem)){
			res.push(elem)
			seen.add(elem)
		}
	}
	return res 

}

removeDuplicatesFromArray(arr)



