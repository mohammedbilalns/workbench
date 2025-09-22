class Node {
	constructor(value){
		this.value = value 
		this.next = null 
	}
}

class Stack {
	constructor(){
		this.top = null 
		this.size = 0 
	}
	
	isEmpty(){
		return this.size == 0 
	}

	push(value){
		const newNode = new Node(value)
		newNode.next = this.top 
		this.top = newNode 
		this.size++ 
	}

	pop(){
		if(this.isEmpty()){
			console.log("Stack is Empty")
			return 
		}else {
			const removed = this.top 
			this.top = this.top.next 
			this.size-- 
			return removed
		}
	}

	peek(){
		if(this.isEmpty()){
			console.log("Stack is Empty")
		}else {
			return this.top.value 
		}
	}

	isEmpty(){
		return this.size == 0 
	}

	getSize(){

		return this.size 
	}

	clear(){
		this.top = null 
		this.size = 0 
	}

	print(){
		if(this.isEmpty()){
			console.log("Stack is Empty")
		}else {
			let curr = this.top 
			
			let str = ""
			while(curr){
				str+= curr.value + " <= "
				curr = curr.next 
			}
			console.log(str)
		}
	}
}


const stack = new Stack()
stack.print()
stack.push(243)
stack.push(2343)
stack.print()
stack.pop()
stack.print()

