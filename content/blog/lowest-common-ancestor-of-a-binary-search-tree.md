---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Lowest Common Ancestor of a Binary Search Tree
Given a binary search tree (BST), find the lowest common ancestor (LCA) of two given nodes in the BST.

According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”



Example 1:

Example 2:

Example 3:



Constraints:

```
 Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8
Output: 6
Explanation: The LCA of nodes 2 and 8 is 6.

```

```
Input: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4
Output: 2
Explanation: The LCA of nodes 2 and 4 is 2, since a node can be a descendant of itself according to the LCA definition.

```

```
Input: root = [2,1], p = 2, q = 1
Output: 2

```

"Tree"

```javascript
/**
  * Definition for a binary tree node.
  * function TreeNode(val) {
  *     this.val = val;
  *     this.left = this.right = null;
  * }
  */
 ​
 /**
  * @param {TreeNode} root
  * @param {TreeNode} p
  * @param {TreeNode} q
  * @return {TreeNode}
  */
 var lowestCommonAncestor = function(root, p, q) {
     if(root==null)return null;
     if(root==p || root==q)return root;
     
     var left = lowestCommonAncestor(root.left, p, q);
     var right = lowestCommonAncestor(root.right, p, q);
     
     if(left && right)return root;
     
     if(left==null)return right;
     return left;
 };
 ​
```
