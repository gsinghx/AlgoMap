---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Pacific Atlantic Water Flow
You are given an m x n integer matrix heights representing the height of each unit cell in a continent. The Pacific ocean touches the continent's left and top edges, and the Atlantic ocean touches the continent's right and bottom edges.

Water can only flow in four directions: up, down, left, and right. Water flows from a cell to an adjacent one with an equal or lower height.

Return a list of grid coordinates where water can flow to both the Pacific and Atlantic oceans.



Example 1:

Example 2:



Constraints:

```
 Input: heights = [[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]
Output: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]

```

```
Input: heights = [[2,1],[1,2]]
Output: [[0,0],[0,1],[1,0],[1,1]]

```

"Depth-first Search","Breadth-first Search"

```javascript
/**
  * @param {number[][]} matrix
  * @return {number[][]}
  */
 var pacificAtlantic = function(matrix) {
     var res = [];
     var m = matrix.length;
     if(m==0)return [];
     var n = matrix[0].length;
     
     var pacific = new Array(m).fill(0).map(e=>new Array(n).fill(false));
     var atlantic = new Array(m).fill(0).map(e=>new Array(n).fill(false));
     
     for(var i=0; i<m; i++){
         find(i, 0, -Infinity, pacific, matrix);
         find(i, n-1, -Infinity, atlantic, matrix);
     }
     
     for(var i=0; i<n; i++){
         find(0, i, -Infinity, pacific, matrix);
         find(m-1, i, -Infinity, atlantic, matrix);
     }
     
     for(var i=0; i<m; i++){
         for(var j=0; j<n; j++){
             if(pacific[i][j] && atlantic[i][j]){
                 res.push([i, j])
             }
         }
     }
     
     return res;
 }
 var find = function(i, j, currVal, mem, matrix){
     if(i>=0 && i<matrix.length && j>=0 && j<matrix[0].length && mem[i][j]==false && matrix[i][j]>=currVal){
         mem[i][j] = true;
         
         find(i, j+1, matrix[i][j], mem, matrix);
         find(i, j-1, matrix[i][j], mem, matrix);
         find(i+1, j, matrix[i][j], mem, matrix);
         find(i-1, j, matrix[i][j], mem, matrix);
     }
 }
 ​
 ​
 ​
 var pacificAtlantic1 = function(matrix) {
     var res = [];
     var m = matrix.length;
     if(m==0)return [];
     var n = matrix[0].length;
     
     for(var i=0; i<m; i++){
         for(var j=0; j<n; j++){
             if(dfs(i, j, matrix))res.push([i,j])
         }
     }
     
     return res;
 };
 // [[1,2,3],
 ​
```
