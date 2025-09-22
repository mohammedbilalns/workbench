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
	}

	enqueue(value){
		const newNode  = new Node(value)
		if(!this.front){
			this.front = newNode 
			this.rear = newNode 
		}else {
			this.rear.next = newNode 
			this.rear = newNode
		}
	}

	dequeue(){
		if(!this.front){
			return false 
		}else if(this.front == this.rear){
			this.front = null 
			this.rear = null 
		}
		let removed = this.front.value 
		this.front = this.front.next 
		return removed 

	}

	peek(){
		return this.front.value 
	}

	reverse(){
		if(!this.front){
			return 
		}

		let prev = null 
		let curr = this.front 
		this.rear = this.front 
		while(curr){
			let next = curr.next 
			curr.next = prev 
			prev = curr 
			curr = next 
		}

		this.front = prev 
	}

	removeOdds(){
		let curr = this.front 
		let prev = null 

		while(curr){
			if(curr.value%2 !== 0 ){
				if(curr == this.front){
					this.front = this.front.next 
				}else{
					prev.next = curr.next 
				}	
				if(curr == this.rear){
					this.rear = prev 
				}
			}else{
				prev = curr 
			}
			curr = curr.next 
		}
	}

	print(){

		if(!this.front){
			console.log("Queue is Empty")
			return 
		}

		let curr = this.front 
		let result = "fr"
		while(curr){
			result+= " "+ curr.value + " -> " 
			curr = curr.next 
		}
		console.log(result + " re")

	}
}

const queue = new Queue()
queue.enqueue(432)
queue.enqueue(561)
queue.enqueue(76)
queue.print()
queue.removeOdds()
queue.print()


