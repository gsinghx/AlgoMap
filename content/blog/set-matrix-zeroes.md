---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Set Matrix Zeroes
Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

Example 1:

Example 2:

Constraints:

```
 Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]

```

```
Input: matrix = [[0,1,2,0],[3,4,5,2],[1,3,1,5]]
Output: [[0,0,0,0],[0,4,5,0],[0,3,1,0]]

```

"Array"

```javascript
/**
  * @param {number[][]} matrix
  * @return {void} Do not return anything, modify matrix in-place instead.
  */
 var setZeroes = function(matrix) {
     var m = matrix.length;
     var n = matrix[0].length;
     var firstRow = false;
     var firstCol = false;
     
     for(var i=0; i<m; i++){
         if(matrix[i][0]==0){
             firstCol = true;
             break;
         }
     }
     for(var j=0; j<n; j++){
         if(matrix[0][j]==0){
             firstRow = true;
             break;
         }
     }
     
     for(var i=0; i<m; i++){
         for(var j=0; j<n; j++){
             if(matrix[i][j]==0){
                 matrix[0][j] = 0;
                 matrix[i][0] = 0;
             }
         }
     }
     
     for(var i=1; i<m; i++){
         if(matrix[i][0]==0){
             for(var j=1; j<n; j++)
                 matrix[i][j] = 0;
         }
     }
     for(var j=1; j<n; j++){
         if(matrix[0][j]==0){
             for(var i=1; i<m; i++)
                 matrix[i][j] = 0;
         }
     }
     
     if(firstRow){
         for(var j=0; j<n; j++)
             matrix[0][j] = 0;
     }
     if(firstCol){
         for(var i=0; i<m; i++)
             matrix[i][0] = 0;
     }
 };
 ​
```
