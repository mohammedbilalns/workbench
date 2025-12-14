
function findCommons<T>(arr1: T[], arr2: T[]): T[]{
	const visited = new Set()
	const res: T[] = []
	for(let i=0 ; i< arr1.length ; i++ ){
		visited.add(arr1[i])
	}
	for(let i=0 ; i< arr2.length ; i++){
		if(visited.has(arr2[i])){
			res.push(arr2[i])
		}
	}
	return res 
}

console.log(findCommons([1,2,3,4,5,6], [2,4,4,6]))
