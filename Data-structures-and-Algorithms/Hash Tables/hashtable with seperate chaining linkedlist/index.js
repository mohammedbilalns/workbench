class Node {
    constructor(key,value){
        this.key = key 
        this.value = value 
        this.next = null 
    }
}


class HashTable{
    constructor(size){
        this.buckets = []
        this.size = size
    } 
    
    hash(key){
        let result = 0 
        for(let i=0 ; i<key.length;i++){
            result += key.charCodeAt(i)
        }
        return result% this.size 
    }
    
    set(key,value){
        let index = this.hash(key)
        let newNode = new Node(key,value)
        
        if(!this.buckets[index]){
            this.buckets[index] = newNode 
        }else {
            
            let curr = this.buckets[index]
            
            while(curr.next){
                if(curr.key == key){
                    curr.value = value 
                    return 
                }
                curr= curr.next 
            }
            if(curr.key == key){
                curr.value = value 
            }else {
                curr.next = newNode 
            }
        }
    }
    
    get(key){
        let index = this.hash(key)
        
        let curr = this.buckets[index]
        
        while(curr){
            if(curr.key == key){
                return curr.value 
            }
            curr = curr.next 
        }
        
        return undefined 
    }
    
    delete(key){
        const index = this.hash(key)
        let curr = this.buckets[index]
        let prev = null 
        
        while(curr){
            if(curr.key == key){
                if(prev){
                    prev.next = curr.next 
                }else{
                    this.buckets[index] = curr.next 
                }
                return true 
            }
            prev = curr 
            curr = curr.next 
        }
        
        return false 
    }

    display(){
        for(let i=0 ; i<this.size ; i++){
            let current = this.buckets[i]
            let chain = ""
            while(current){
                chain+= `key:${current.key}, value:${current.value}, `
                current = current.next 
            }
            console.log(`index:${i}, chain:${chain}`)
        }
        
    }
        
    
}

const table = new HashTable(10)
table.set("name", "bilal")
table.set("mane","dsfdsf")
table.delete("name")
table.display()
