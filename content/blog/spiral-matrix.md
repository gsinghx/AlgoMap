---
title: Spiral Matrix
slug: /spiral-matrix
date: "2020-06-16T22:12:03.284Z"
tags: ["Array"]
description: 2 Sum

status: todo
---

Given an m x n matrix, return all elements of the matrix in spiral order.

Example 1:

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

```javascript
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  var left = 0
  var right = matrix[0].length - 1
  var top = 0
  var bottom = matrix.length - 1
  var out = []

  while (left <= right && top <= bottom) {
    for (var i = left; i <= right; i++) {
      out.push(matrix[top][i])
    }
    for (var i = top + 1; i <= bottom; i++) {
      out.push(matrix[i][right])
    }

    if (left < right && top < bottom) {
      for (var i = right - 1; i > left; i--) {
        out.push(matrix[bottom][i])
      }
      for (var i = bottom; i > top; i--) {
        out.push(matrix[i][left])
      }
    }

    left++
    right--
    top++
    bottom--
  }

  return out
}
```
