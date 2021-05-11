---
title: Trie Construction
date: "2020-06-16T22:12:03.284Z"
tags: ["Trie", "Construction"]
description: 2 Sum

status: done
---

## What's a Trie?

A trie (pronounced as "try") is a tree data structure used to store and retrieve strings character by character.
Various applications like autocomplete rely highly on such data structures.
Its also called a prefix tree.

## Example:

A trie containing the words 'win', 'wow' and 'word'.

```
     w
    /  \
   i     o
  /    /  \
 n    w    r
            \
             d

```

## Implementation:

```javascript
 var Trie = function() {
     this.children = {};
     this.end = false;
 };

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
```

## Execution:

```javascript
var trie = new Trie()
trie.insert("win")
trie.insert("word")
trie.startsWith("w") //Output: true
trie.search("win") //Output: true
trie.search("wine") //Output: false
```
