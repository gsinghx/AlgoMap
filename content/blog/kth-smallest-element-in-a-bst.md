---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Kth Smallest Element in a BST
Given the root of a binary search tree, and an integer k, return the kth (1-indexed) smallest element in the tree.



Example 1:

Example 2:



Constraints:



```
 Input: root = [3,1,4,null,2], k = 1
Output: 1

```

```
Input: root = [5,3,6,2,4,null,null,1], k = 3
Output: 3

```

"Binary Search","Tree"

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
  * @param {number} k
  * @return {number}
  */
 var kthSmallest = function(root, k) {
     var inorder = [];
     
     function help(root){
         if(root==null)return;
         help(root.left);
         inorder.push(root.val);
         help(root.right);
     }
     help(root);
     return inorder[k-1];
 }
 var kthSmallest1 = function(root, k) {
     var stack = [];
     
     while(stack.length!=0 || root!=null){
         while(root!=null){
             stack.push(root);
             root = root.left;
         }
         root = stack.pop();
         k--;
         if(k==0){
             return root.val;
         }
         root = root.right;
     }
     
 };
 ​
```
