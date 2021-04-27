---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Word Search II
Given an m x n board of characters and a list of strings words, return all words on the board.

Each word must be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once in a word.

Example 1:

Example 2:

Constraints:

```
 Input: board = [["o","a","a","n"],["e","t","a","e"],["i","h","k","r"],["i","f","l","v"]], words = ["oath","pea","eat","rain"]
Output: ["eat","oath"]

```

```
Input: board = [["a","b"],["c","d"]], words = ["abcb"]
Output: []

```

"Backtracking","Trie"

```javascript
/**
  * @param {character[][]} board
  * @param {string[]} words
  * @return {string[]}
  */
 var Trie = function(){
     this.children = new Map();
     this.end = false;
 }
 Trie.prototype.addWord = function(word){
     var curr = this;
     
     for(var ch of word){
         if(!curr.children.has(ch))curr.children.set(ch, new Trie());
         curr = curr.children.get(ch);
     }
     
     curr.end = true;
 }
 ​
 var findWords = function(board, words) {
     var m = board.length;
     var n = board[0].length;
     var out = {};
     var trie = new Trie();
     
     for(var word of words){
         trie.addWord(word);
     }
     
     for(var i=0; i<m; i++){
         for(var j=0; j<n; j++){
             if(trie.children.has(board[i][j])){
                 dfs(board, i, j, board[i][j], trie.children.get(board[i][j]), out);
             }
         }
     }
     
     return Object.keys(out);
 };
 var dfs = function(board, i, j, currWord, currNode, out){
     var m = board.length;
     var n = board[0].length;
     
     if(currNode.end){
         out[currWord] = 1;
     }
     var temp = board[i][j];
     board[i][j] = null;
     
     var dirs = [[1,0],[-1,0],[0,1],[0,-1]];
     
     for(var dir of dirs){
         var x = i + dir[0];
         var y = j + dir[1];
         
         if(x>=0 && x<m && y>=0 && y<n && currNode.children.has(board[x][y])){
             dfs(board, x, y, currWord+board[x][y], currNode.children.get(board[x][y]), out);
         }
     }
     
     board[i][j] = temp;
 ​
```
