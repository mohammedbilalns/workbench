export class ListNode{
	val: any
	next: any 
	constructor(val: any){
		this.val = val 
		this.next = null 
	}
}


export class List{
	head: any 
	constructor(){
		this.head = null
	}

	append(val:any){
		const newNode = new ListNode(val)
		if(!this.head){
			this.head = newNode
			return 
		}
		let curr = this.head 
		while(curr.next){
			curr = curr.next
		}
		curr.next = newNode 

	}

	prepend(val:any){
		const newNode = new ListNode(val)
		if(!this.head){
			this.head = newNode 
			return 
		}
		newNode.next = this.head 
		this.head  = newNode

	}

	print(){
		let curr = this.head 
		while(curr){
			console.log(curr.val + " -> ")
			curr = curr.next 
		}
	}

	insertAt(pos:number, value:any){
		let index = 0 
		let curr =  this.head 
		while(index < pos-1 && curr.next){
			curr = curr.next 
			index++
		}

		if(index !== pos-1){
			console.log("Invalid index")
			return 
		}
		let newNode = new ListNode(value)
		let nextNode = curr.next
		curr.next = newNode
		if(nextNode){
			newNode.next = nextNode
		}
	}

	removeFrom(pos:number){
		let index = 0 
		let curr = this.head 
		while(index < pos -1 && curr.next ){
			curr = curr.next 
			index++
		}
		console.log("index", index)
		console.log("pos", pos)
		if(index !== pos-1){
			console.log("Inalid index")
			return 
		}
		let nextNode = curr.next?.next 
		if(nextNode){
			curr.next = nextNode
			return 
		}
		curr.next = null 
	}

}



