---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Maximum Depth of Binary Tree
Given the root of a binary tree, return its maximum depth.

A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Example 1:

Example 2:

Example 3:

Example 4:

Constraints:

```
 Input: root = [3,9,20,null,null,15,7]
Output: 3

```

```
Input: root = [1,null,2]
Output: 2

```

```
Input: root = []
Output: 0

```

```
Input: root = [0]
Output: 1

```

"Tree","Depth-first Search","Recursion"

```javascript
/**
  * Definition for a binary tree node.
  * function TreeNode(val, left, right) {
  *     this.val = (val===undefined ? 0 : val)
  *     this.left = (left===undefined ? null : left)
  *     this.right = (right===undefined ? null : right)
  * }
  */
 /**
  * @param {TreeNode} root
  * @return {number}
  */
 var maxDepth = function(root) {
     if(root==null)return 0;
     
     return 1+Math.max(maxDepth(root.left), maxDepth(root.right));
 };
 ​
```
