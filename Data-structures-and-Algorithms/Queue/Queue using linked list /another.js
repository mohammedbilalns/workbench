class Node {
	constructor(value){
		this.value = value 
		this.next = null 
	}
}


class Queue{
	constructor(){
		this.front = null  
		this.rear = null 
		this.size = 0
	}

	enqueue(value){
		const node  = new Node(value)
		if(!this.rear){
			this.rear = this.front = node 
		}else {
			this.rear.next = node
			this.rear = node 
		}
		this.size++ 
	}

	dequeue(){
		
		if(!this.front){
			console.log("Queue is Empty")
			return 
		}else  {
			let removed = this.front 
			this.front = this.front.next
			if(!this.front){
				this.rear = null 
			}
			this.size-- 
			return removed.value  
		}
		
	}

	peek(){
		if(!this.front){
			console.log("Queue is Empty")
			return 
		}else {
			return this.front 
		}
	}
	
	isEmpty(){
		return this.size == 0 
	}

	getSize(){
		return this.size 
	}

	print(){
		if(!this.front ){
			console.log("Queue is Empty")
			return 
		}else {
			let curr = this.front
			let str = ""
			while(curr){
				str += curr.value + " -> " 
				curr = curr.next 
			}

			console.log(str)
		}
	}
}
