---
title: Same Tree
date: "2020-06-16T22:12:03.284Z"
tags: ["Tree"]
description: Same Tree

status: todo
---

Same Tree
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

Example 1:

Example 2:

Example 3:

Constraints:

```
 Input: p = [1,2,3], q = [1,2,3]
Output: true

```

```
Input: p = [1,2], q = [1,null,2]
Output: false

```

```
Input: p = [1,2,1], q = [1,1,2]
Output: false

```

"Tree","Depth-first Search"

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
  * @param {TreeNode} p
  * @param {TreeNode} q
  * @return {boolean}
  */
 var isSameTree = function(p, q) {
     if(p==null && q==null)return true;
     if(p==null || q==null)return false;
     
     var que1 = [p];
     var que2 = [q];
     
     while(que1.length!=0 && que2.length!=0){
         var node1 = que1.shift();
         var node2 = que2.shift();
         
         if(node1==null && node2==null)continue;
         if(node1==null || node2==null)return false;
         
         if(node1.val!=node2.val)return false;
         
         que1.push(node1.left);
         que1.push(node1.right);
         
         que2.push(node2.left);
         que2.push(node2.right);
     }
     
     return true;
 }
 var isSameTree1 = function(p, q) {
     if(p==null && q==null)return true;
     if(p==null || q==null)return false;
     
     return p.val==q.val && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
 };
 ​
```
