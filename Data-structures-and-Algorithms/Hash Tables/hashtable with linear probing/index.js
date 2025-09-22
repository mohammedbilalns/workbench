
class HashTable {
	constructor(size){
		this.size = size 
		this.table = new Array(size)
	}

	hash(key){
		let total = 0 
		for(let i=0 ;i<key.length ;i++){
			total += key.charCodeAt(i)
		}

		return total % this.size
	}

	set(key,value){
		
		let index = this.hash(key)
		while(this.table[index] !== undefined){
			if(this.table[index][0] == key){
				this.table[index][1] = value 
				return 
			}
			index = (index+1)% this.size 
		}
		this.table[index] = [key,value] 
	}
	
	get(key){
		let index = this.hash(key)
		while(this.table[index] !== undefined){
			if(this.table[index][0] == key){
				return this.table[index][1]
			}
			index = (index+1) % this.size 
		}
		return undefined
	}

	remove(key){

		let index = this.hash(key)
		while(this.table[index]!== undefined){

			if(this.table[index][0] == key){
				let removed = this.table[index][0]
				this.table[index] = undefined
				return removed 
			}
			
			index = (index+1) % this.size 
		}

	}


	print(){
		for(let i=0 ;i<this.table.length ;i++){
			if(this.table[i]){
				console.log([i, this.table[i]])
			}	
		}
	}
}

let table = new HashTable(10)
table.set("name","bilal")
table.set("mane","fskduhf")
table.set("a", "fsdf")
table.set("b","iu")
table.remove("name")
table.print()


