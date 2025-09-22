
class HashTable {
	constructor(size){
		this.size = size 
		this.table = new Array(size).fill(null).map(()=> [])
	}

	hash(key){
		let sum = 0 
		for(let i=0;i<key.length ;i++){
			sum+= key.charCodeAt(i)
		}
		return sum % this.size
	}

	set(key,value){
		let index = this.hash(key)
		let bucket = this.table[index]
		
		for(let i=0;i< bucket.length;i++){
			if(bucket[i][0] == key){
				bucket[i][1] = value 
				return 
			}
		}
		bucket.push([key,value])
	}


	get(key){
		let index = this.hash(key)
		let bucket = this.table[index]

		for(let i=0;i<bucket.length;i++){
			if(bucket[i][0] == key){
				return bucket[i][1]
			}
	
		}
		return 


	}

	remove(key){
		 let index = this.hash(key);
        let bucket = this.table[index];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1); // Remove key-value pair
                return true;
            }
        }

        return false;
	}

	print(){
		for(let i=0;i<this.table.length ;i++){
			if(this.table[i].length!==0){
				console.log([i, this.table[i]])
			}

		}
	}
}

const table = new HashTable(10)
table.set("name","bilal")
table.set("mane", "fsjdkf")
table.set("w","wer")
table.print()

