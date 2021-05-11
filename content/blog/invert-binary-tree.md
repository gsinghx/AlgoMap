---
title: Invert Binary Tree
date: "2020-06-16T22:12:03.284Z"
tags: ["BST", "Tree"]
description: 2 Sum

status: done
---

> Binary search tree (BST) construction and its properties is covered [here](/bst)

Given the root of a binary tree, invert the tree.

## Example:

```
Tree:
    2
  /   \
 1     3

Inverted Tree:
    2
  /   \
 3     1

Input: [2,1,3]
Output: [2,3,1]
```

## Solution:

```javascript
 var invertTree = function(root) {
     if(root==null)return root;
     
     var temp = root.left;
     root.left = root.right;
     root.right = temp;
     
     invertTree(root.left);
     invertTree(root.right);
     
     return root;
 };
 ​
```
