import {ListNode} from "./listNode.ts"

export class LinkedList<T>{
	public head : ListNode<T> | null 

	constructor(){
		this.head = null 
	}

	/** 
	* Insert a new node at the end of the list 
	* @param val new value of inserting node 
	*/
	append(val: T): void {
		const newNode = new ListNode(val)
		
		// check if there is head else make the new node as head 
		if(!this.head){
			this.head = newNode 
			return 
		}

		// find the last node 
		let curr = this.head 
		while(curr && curr.next){
			curr = curr.next
		}
		// attach the newnode next to the last node 
		curr.next = newNode 
	}

	/**
	* Insert a new Node at the beginning of the list 
	* @param val new value of the inserting node 
	*/
	prepend(val: T): void {
		const newNode = new ListNode(val)

		if(!this.head){
			this.head = newNode 
			return 
		}

		newNode.next = this.head  
		this.head = newNode 
	}

	/** 
	 * Insert a new Node at a specific index 
	 * @param val  new value of the inserting node 
	 * @param index index to insert 
	 */
	insertAt(val: T, index: number){
		const newNode = new ListNode(val)
		// insert at the beginning and set the head as new node if index is zero 
		if(index ==0){
			newNode.next = this.head
			this.head = newNode
			return 
		}

		let curr = this.head 
		for(let i=0 ; i<=index-2 ; i++ ){
			if(!curr) throw new Error("Index is out of bound")
			curr = curr.next
		}
		if(!curr) throw new Error("Index is out of bound")	
		 newNode.next = curr.next
		
		curr.next = newNode 

	}



	/** 
	 * Convert the list to array 
	 * @returns {T[]} - array of list values 
	*/
	toArray():T[] {
		const res : T[] = []
		let curr  = this.head 

		while(curr){
			res.push(curr.val)
			curr = curr.next
		}
		return res
	}

	/** 
	 * Convert the list to string 
	 */
	toString():string{
		return this.toArray().join(' -> ')
	}

	/**
	* print the list 
	*/

	print(){
		console.log(this.toString())
	}


}


