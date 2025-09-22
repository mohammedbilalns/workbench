/** 
 * function to find the first index of a value in list 
 * @params {head: head of the list}
 */ 
import {ListNode} from "../listNode.ts"

function findFirstIndex<T>(head: ListNode<T> | null, val: T ): number {
	if(!head){
		return -1
	}
	let i = 0 
	let curr = head 
	while(curr.next){
		if(curr.val == val) return i 
		curr = curr.next
		i++
	}
	return -1 
}

