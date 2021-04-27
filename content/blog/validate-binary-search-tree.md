---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Validate Binary Search Tree
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

Example 1:

Example 2:

Constraints:

```
 Input: root = [2,1,3]
Output: true

```

```
Input: root = [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.

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
  * @return {boolean}
  */
 var isValidBST2 = function(root) {
     var prev = -Infinity;
     var stack = [];
     
     while(root!=null || stack.length!=0){
         while(root!=null){
             stack.push(root);
             root = root.left;
         }
         
         var node = stack.pop();
         if(node.val<=prev){
             return false;
         }
         
         prev = node.val;
         root = node.right;
     }
     
     return true;
 }
 ​
 var isValidBST = function(root) {
     if(root==null)return true;
     
     function help(root, lowerBound, upperBound){
         if(root==null) return true;
         
         if(lowerBound!=null && root.val<=lowerBound)return false;
         if(upperBound!=null && root.val>=upperBound) return false;
         
         return help(root.left, lowerBound, root.val) && help(root.right, root.val, upperBound);
     }
     
     return help(root, null, null)
 }
 ​
 var isValidBST1 = function(root) {
     if(root==null)return true;
     
     if(!allGreaterNodes(root.right, root.val) || !allLesserNodes(root.left, root.val))return false;
     
     return isValidBST(root.left) && isValidBST(root.right);
 };
 ​
 var allGreaterNodes = function(root, val){
     if(root==null)return true;
     
     if(root.val<val)return false;
 ​
```
