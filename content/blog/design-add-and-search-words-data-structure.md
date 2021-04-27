---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Design Add and Search Words Data Structure
Design a data structure that supports adding new words and finding if a string matches any previously added string.

Implement the WordDictionary class:

Example:

Constraints:

```
 Input
["WordDictionary","addWord","addWord","addWord","search","search","search","search"]
[[],["bad"],["dad"],["mad"],["pad"],["bad"],[".ad"],["b.."]]
Output
[null,null,null,null,false,true,true,true]

Explanation
WordDictionary wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True

```

"Backtracking","Depth-first Search","Design","Trie"

```javascript
/**
  * Initialize your data structure here.
  */
 var WordDictionary = function() {
     this.children = new Map();
     this.end = false;
 };
 ​
 /**
  * @param {string} word
  * @return {void}
  */
 WordDictionary.prototype.addWord = function(word) {
     var node = this;
     for(var ch of word){
         if(!node.children.has(ch))node.children.set(ch, new WordDictionary());
         node = node.children.get(ch);
     }
     node.end = true;
 };
 ​
 /**
  * @param {string} word
  * @return {boolean}
  */
 WordDictionary.prototype.search = function(word) {
     
     function help(node, word){
         for(var i=0; i<word.length; i++){
             if(word[i]=="."){
                 for(var child of node.children.keys()){
                     if(help(node.children.get(child), word.substr(i+1) )) return true;
                 }
                 return false;
             }else{
                 if(!node.children.has(word[i]))return false;
                 node = node.children.get(word[i]);
             }
         }      
         
         return node.end;
     }
     
     return help(this, word)
 };
 ​
 /**
  * Your WordDictionary object will be instantiated and called as such:
  * var obj = new WordDictionary()
  * obj.addWord(word)
  * var param_2 = obj.search(word)
  */
 ​
```
