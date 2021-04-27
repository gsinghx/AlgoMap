---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Subtree of Another Tree
Given two non-empty binary trees s and t, check whether tree t has exactly the same structure and node values with a subtree of s. A subtree of s is a tree consists of a node in s and all of this node's descendants. The tree s could also be considered as a subtree of itself.

Example 1:
Given tree s:



Example 2:
Given tree s:



```
      3
    / \
   4   5
  / \
 1   2

```

```
   4
 / \
1   2

```

```
     3
   / \
  4   5
 / \
1   2
   /
  0

```

```
   4
 / \
1   2

```

"Tree"

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
  * @param {TreeNode} s
  * @param {TreeNode} t
  * @return {boolean}
  */
 var isSubtree = function(s, t) {
     if(s==null && t==null)return true;
     if(s==null || t==null)return false;
     
     if(isEqual(s,t))return true;
     
     return isSubtree(s.left, t)|| isSubtree(s.right, t);
 };
 ​
 var isEqual = function(s,t){
     if(s==null && t==null)return true;
     if(s==null || t==null)return false;
     
     if(s.val!=t.val)return false;
     
     return isEqual(s.left, t.left) && isEqual(s.right, t.right);
 }
 ​
```
