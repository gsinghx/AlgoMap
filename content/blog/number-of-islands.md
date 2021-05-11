---
title: Number of Islands
date: "2020-06-16T22:12:03.284Z"
tags: ["BFS", "DFS", "Graph"]
description: 2 Sum

status: done
---

Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

## Example:

```
 Input: [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
```

```
Input: [
 ["1","1","0","0","0"],
 ["1","1","0","0","0"],
 ["0","0","1","0","0"],
 ["0","0","0","1","1"]
]
Output: 3
```

## Solution:

```javascript
var numIslands = function (grid) {
  var m = grid.length
  var n = grid[0].length
  var count = 0
  for (var i = 0; i < m; i++) {
    for (var j = 0; j < n; j++) {
      if (grid[i][j] == "1") {
        count++
        bfs(i, j)
      }
    }
  }
  function bfs(i, j) {
    var que = [[i, j]]
    while (que.length != 0) {
      var el = que.shift()
      if (grid[el[0]][el[1]] == "0") continue
      grid[el[0]][el[1]] = "0"
      var dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1],
      ]
      for (var dir of dirs) {
        var x = el[0] + dir[0]
        var y = el[1] + dir[1]
        if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] == "1") {
          que.push([x, y])
        }
      }
    }
  }
  return count
}
```
