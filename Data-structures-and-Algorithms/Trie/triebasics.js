class TrieNode {
  constructor() {
    this.children = {};
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        node.children[char] = new TrieNode();
      }
      node = node.children[char];
    }
    node.isEndOfWord = true;
  }

  search(word) {
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }

    return node.isEndOfWord;
  }

  startsWith(word) {
    let node = this.root;
    for (let char of word) {
      if (!node.children[char]) {
        return false;
      }
      node = node.children[char];
    }
    return true;
  }

  delete(word) {
    let stack = [];
    let node = this.root;

    for (let char of word) {
      if (!node.children[char]) return false;
      stack.push([node, char]);
      node = node.children[char];
    }
    if (!node.isEndOfWord) return;
    node.isEndOfWord = false;

    while (stack.length > 0) {
      let [parent, char] = stack.pop();
      if (!node.isEndOfWord && Object.keys(node.children).length == 0) {
        delete parent.children[char];
      } else {
        break;
      }
      node = parent;
    }
  }

  replace(word, newValue) {
    if (this.search(word)) {
      this.delete(word);
      this.insert(newValue);
    }
  }

  countWords(node = this.root) {
    let count = 0;
    if (node.isEndOfWord) count++;

    for (let char in node.children) {
      count += this.countWords(node.children[char]);
    }
    return count;
  }
}

const trieEx = new Trie();
trieEx.insert("cat");
//trieEx.delete("cat")
console.log(trieEx.countWords());
