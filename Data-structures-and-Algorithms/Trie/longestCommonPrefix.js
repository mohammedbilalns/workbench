class TrieNode{
    constructor(){
        this.isEndOfWord = false 
        this.children = {}
    }

}

class Trie{
    constructor(){
        this.root = new TrieNode()
    }


    insert(word){
        let node = this.root 
        for(let char of word){
            if(!node.children[char]){
                node.children[char] = new TrieNode()
            }
            node = node.children[char]
        }
        node.isEndOfWord = true 
    }

    search(word){
        let node = this.root 
        for(let char of word){
            if(!node.children[char]){
                return false 
            }
            node = node.children[char]
        }
        return node.isEndOfWord 
    }

    getLongestPrefix(){
        let prefix = ""
        let node = this.root 

        while(Object.keys(node.children).length == 1 && !node.isEndOfWord){
            let char = Object.keys(node.children)[0]
            prefix+= char 
            node = node.children[char]
        }
        return prefix 
    }
}


const trie = new Trie()
trie.insert("cate")
trie.insert('caterogry')
//trie.insert("fsdjkh")
console.log(trie.getLongestPrefix())