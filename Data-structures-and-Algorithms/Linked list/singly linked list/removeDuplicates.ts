import {List, ListNode} from "./index.ts"
import {arrayToLinkedList} from "./arrayToList.ts"

function removeDuplicates(list:List): List {
	let seen = new Set()
	let curr = list.head 
	let prev: ListNode | null = null 

	while(curr){
		if( seen.has(curr.val) ){
			if(prev){
				prev.next = curr.next 
			}
		}else{
			seen.add(curr.val)
			prev = curr 
		}

		curr = curr.next 
	}

	return list 
}

const lst = arrayToLinkedList([1,1,2,3,4,5,6,4,7,8,9,9,10])
const lstWdupl = removeDuplicates(lst)

