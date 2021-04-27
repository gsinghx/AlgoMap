---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Binary Tree Maximum Path Sum
A path in a binary tree is a sequence of nodes where each pair of adjacent nodes in the sequence has an edge connecting them. A node can only appear in the sequence at most once. Note that the path does not need to pass through the root.

The path sum of a path is the sum of the node's values in the path.

Given the root of a binary tree, return the maximum path sum of any path.



Example 1:

Example 2:



Constraints:

```
 Input: root = [1,2,3]
Output: 6
Explanation: The optimal path is 2 -> 1 -> 3 with a path sum of 2 + 1 + 3 = 6.

```

```
Input: root = [-10,9,20,null,null,15,7]
Output: 42
Explanation: The optimal path is 15 -> 20 -> 7 with a path sum of 15 + 20 + 7 = 42.

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
 var maxPathSum = function(root) {
     var res = root.val;
     
     function help(root){
         if(root==null)return 0;
         
         var leftMax = Math.max(0, help(root.left));
         var rightMax = Math.max(0, help(root.right));
         
         res = Math.max(res, root.val+leftMax+rightMax);
         
         return root.val+Math.max(leftMax, rightMax);
     }
     help(root);
     
     return res;
 };
 ​
```
