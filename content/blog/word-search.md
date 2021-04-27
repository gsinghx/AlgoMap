---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Word Search
Given an m x n grid of characters board and a string word, return true if word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:

Example 2:

Example 3:

Constraints:

Follow up: Could you use search pruning to make your solution faster with a larger board?

```
 Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true

```

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "SEE"
Output: true

```

```
Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCB"
Output: false

```

"Array","Backtracking"

```javascript
/**
  * @param {character[][]} board
  * @param {string} word
  * @return {boolean}
  */
 var exist = function(board, word) {
     var m = board.length;
     var n = board[0].length;
     
     for(var i=0; i<m; i++){
         for(var j=0; j<n; j++){
             if(board[i][j]==word[0]){
                 if(dfs(board, i, j, word, board[i][j], 1))return true;
             }
         }
     }
     
     return false;
 };
 var dfs = function(board, i, j, word, currWord, index){
     var m = board.length;
     var n = board[0].length;
     var dirs = [[1,0],[-1,0],[0,1],[0,-1]];
     
     if(currWord==word)return true;
 ​
     var temp = board[i][j];
     board[i][j] = "";
     
     for(dir of dirs){
         var x = i + dir[0];
         var y = j + dir[1];
             
         if(x>=0 && x<m && y>=0 && y<n && board[x][y]==word[index]){
             if(dfs(board, x, y, word, currWord+board[x][y], index+1)){
                 return true;
             }
         }
     }
     
     board[i][j] = temp;
     return false;
 }
 ​
```
