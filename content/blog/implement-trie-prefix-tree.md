---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Implement Trie (Prefix Tree)
A trie (pronounced as "try") or prefix tree is a tree data structure used to efficiently store and retrieve keys in a dataset of strings. There are various applications of this data structure, such as autocomplete and spellchecker.

Implement the Trie class:

Example 1:

Constraints:

```
 Input
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
Output
[null, null, true, false, true, null, true]

Explanation
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // return True
trie.search("app");     // return False
trie.startsWith("app"); // return True
trie.insert("app");
trie.search("app");     // return True

```

"Design","Trie"

```javascript
/**
  * Initialize your data structure here.
  */
 var Trie = function() {
     this.children = {};
     this.end = false;
 };
 ​
 /**
  * Inserts a word into the trie.
  * @param {string} word
  * @return {void}
  */
 Trie.prototype.insert = function(word) {
     var curr = this;
     
     for(var ch of word){
         if(curr.children[ch]===undefined){
             curr.children[ch] = new Trie();
         }
         curr = curr.children[ch];
     }
     curr.end = true;
 };
 ​
 /**
  * Returns if the word is in the trie.
  * @param {string} word
  * @return {boolean}
  */
 Trie.prototype.search = function(word) {
     var curr = this;
     
     for(var ch of word){
         if(!curr.children[ch]){
             return false;
         }
         curr = curr.children[ch];
     }
     return curr.end;
 };
 ​
 /**
  * Returns if there is any word in the trie that starts with the given prefix.
  * @param {string} prefix
  * @return {boolean}
  */
 Trie.prototype.startsWith = function(prefix) {
     var curr = this;
     
     for(var ch of prefix){
         if(!curr.children[ch]){
             return false;
         }
         curr = curr.children[ch];
     }
     
     return true;
 };
 ​
 /**
  * Your Trie object will be instantiated and called as such:
  * var obj = new Trie()
  * obj.insert(word)
 ​
```
