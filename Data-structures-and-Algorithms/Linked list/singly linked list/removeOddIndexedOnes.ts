import {List, ListNode} from "./index.ts"
import {arrayToLinkedList} from "./arrayToList.ts"

function removeOddIndexedOnes(list:List):List {
	let curr =  list.head 
	let prev : ListNode| null  = null
	let index : number = 0 

	while(curr){
		if(index % 2 ==1){
			if(prev){
				prev.next = curr.next 
			}
		}else{
			prev = curr 
		}

		curr = curr.next 
		index++
	}

	return list 
}


const lst = arrayToLinkedList([1,2,3,4,5,6,7,8,9,10])
const removedList = removeOddIndexedOnes(lst)
removedList.print()
