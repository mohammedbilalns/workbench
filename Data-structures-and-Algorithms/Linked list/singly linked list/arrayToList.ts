import {List} from "./index.ts"

export function arrayToLinkedList(arr: any[]): List{

	const list = new List()
	for(let i=0; i<arr.length; i++){
		list.append(arr[i])
	}
	return list
}


const arr = [1,2,3,4,5,6,7]
const list = arrayToLinkedList(arr)

