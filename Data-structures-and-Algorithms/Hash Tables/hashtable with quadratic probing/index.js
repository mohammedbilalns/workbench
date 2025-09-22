
class HashTable {
	constructor(size){
		this.size = size 
		this.table = []
	}

	hash(key){
		let total = 0 
		for(let i=0 ;i<key.length ; i++){
			total+= key.charCodeAt(i)
		}
		return total % this.size
	}

	set(key , value){
		let index = this.hash(key)
		let i = 1 
		while(this.table[index] !== undefined){
			if(this.table[index][0]==key){
				this.table[index][1] = value 
				return 
			}
			index = (index+ i*i ) % this.size
			i++
			if(i == this.size) return false 
		}
		this.table[index] = [key ,value ]
	}

	get(key){
		let index  = this.hash(key)
		let i= 1 
		while(this.table[index] !== undefined){
			if(this.table[index][0] == key){
				return this.table[index]
			}
			index = (index + i*i) % this.size 
			i++ 
			if(i == this.size) return null  
		}

		return undefined 
	}

	remove(key){
		let index = this.hash(key)
		let i = 1 
		while(this.table[index] !== undefined){
			if(this.table[index][0] == key){
				let removed = this.table[index]
				this.table[index] = undefined 
				return removed 
			}
			index = (index + i*i) % this.size 
			i++
			if(i == this.size) return null 

		}
		return undefined
	}


	display(){
		for(let i=0 ; i< this.table.length;i++){
			if(this.table[i]){
				console.log([i, this.table[i]])
			}
		}
	}
}

let table = new HashTable(8)
table.set("name","fsdjkh")
table.set("mane","r")
table.set("enam","oiu")
table.set("fsdj","fsdkjh")
table.remove("name")
table.display()
