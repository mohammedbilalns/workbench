// Design a data structure that supports adding new words and finding if a string matches any previously added string.

// Implement the WordDictionary class:

// WordDictionary() Initializes the object.
// void addWord(word) Adds word to the data structure, it can be matched later.
// bool search(word) Returns true if there is any string in the data structure that matches word or false otherwise. word may contain dots '.' where dots can be matched with any letter.

var TrieNode = function () {
  this.children = {};
  this.isEndOfWord = false;
};
var WordDictionary = function () {
  this.root = new TrieNode();
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
  let node = this.root;
  for (let char of word) {
    if (!node.children[char]) {
      node.children[char] = new TrieNode();
    }
    node = node.children[char];
  }
  node.isEndOfWord = true;
};

/**
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
  function dfs(node, index) {
    if (index == word.length) {
      return node.isEndOfWord;
    }

    let char = word[index];
    if (char == ".") {
      for (let key in node.children) {
        if (dfs(node.children[key], index + 1)) {
          return true;
        }
      }
      return false;
    } else {
      if (!node.children[char]) {
        return false;
      }
      return dfs(node.children[char], index + 1);
    }
  }

  return dfs(this.root, 0);
};
