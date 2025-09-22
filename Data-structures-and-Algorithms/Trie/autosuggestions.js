class TrieNode {
  constructor() {
    this.children = [];
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

  autosuggest(prefix) {
    let node = this.root;
    for (let char of prefix) {
      if (!node.children[char]) {
        return [];
      }
      node = node.children[char];
    }

    let suggestions = [];
    let queue = [[node, prefix]];

    while (queue.length > 0) {
      let [currentNode, wordSoFar] = queue.shift();

      if (currentNode.isEndOfWord) suggestions.push(wordSoFar);
      for (let char in currentNode.children) {
        queue.push([currentNode.children[char], wordSoFar + char]);
      }
    }
    return suggestions;
  }
}

const trie = new Trie();
trie.insert("cat");
trie.insert("cte");
trie.insert("fskdjh");
console.log(trie.autosuggest("c"));
