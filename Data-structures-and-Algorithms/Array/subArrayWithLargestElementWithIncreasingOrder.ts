function subArrayWithLargestelementInIncreasingOrder(arr: number[][]): number[]{

	let max = -Infinity
	let maxArrayIndex : number  = -1 
	for(let i=0 ; i< arr.length ; i++){
		for(let j=0 ; j<arr[i].length ; j++){
				if(arr[i][j]> max){
				max = arr[i][j]
				maxArrayIndex = i 
			}
		}
	}
	return [...arr[maxArrayIndex]].sort((a,b)=> a-b)
}

console.log(subArrayWithLargestelementInIncreasingOrder([[10, 2], [3, 4], [5, 6]]))

