/*
 * @lc app=leetcode.cn id=208 lang=typescript
 *
 * [208] 实现 Trie (前缀树)
 */

// @lc code=start

const OFFSET = "a".charCodeAt(0);

class TrieNode {
  char: string;
  children: TrieNode[];
  isEndOfWord: boolean;
  constructor(
    char: string = "",
    children: TrieNode[] = [],
    isEndOfWord: boolean = false
  ) {
    this.char = char;
    this.children = children;
    this.isEndOfWord = isEndOfWord;
  }
}

class Trie {
  root: TrieNode;
  constructor() {
    this.root = new TrieNode();
  }

  insert(word: string): void {
    let node = this.root;
    for (let char of word) {
      const index = char.charCodeAt(0) - OFFSET;
      if (!node.children[index]) {
        node.children[index] = new TrieNode(char);
      }
      node = node.children[index];
    }
    node.isEndOfWord = true;
  }

  search(word: string): boolean {
    let node = this.root;
    for (let char of word) {
      const index = char.charCodeAt(0) - OFFSET;
      if (!node.children[index]) {
        return false;
      } else {
        node = node.children[index];
      }
    }
    return node.isEndOfWord;
  }

  startsWith(prefix: string): boolean {
    let node = this.root;
    for (let char of prefix) {
      const index = char.charCodeAt(0) - OFFSET;
      if (!node.children[index]) {
        return false;
      } else {
        node = node.children[index];
      }
    }
    return true;
  }
}

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */
// @lc code=end
