 class Stack {
	 constructor(){
		 this.stack = new Array()
		 this.set = new Set()
		 this.size = 0

	 }

	 push(value){
		if(this.set.has(value)){
			console.log("Value already exists in the stack ")
			return 
		}else {
			this.set.add(value)
			this.stack[this.size] = value 
			this.size++ 
			
		}
	 }

	 pop(){
		 if(this.size ==0 ){
			 console.log("Stack is Empty")
			 return 
		 }
		 let removed = this.stack[this.size-1]	
		 this.size-- 
		 this.set.delete(removed)
		 return removed 

	 }

	 peek(){
		 return this.stack[this.size-1]
	 }

	 print(){
		 if(this.size == 0 ){
			 console.log("Stack is Empty")
		 }else {

			 let result = ""
			 for(let i=0 ; i<this.size;i++){
				 result+= this.stack[i]+" "
			 }

			 console.log(result)
		 }
	 }
 }


const stack = new Stack()
stack.push(12)
stack.push(32)
stack.pop(32)
stack.push(32)
stack.print()


