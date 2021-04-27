---
title: BST Level Order Traversal
slug: /bst-level-order
date: "2020-06-16T22:12:03.284Z"
tags: ["Tree", "Traversal"]
description: BST Level Order Traversal

status: done
---

Binary Tree Level Order Traversal
Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).



Example 1:

Example 2:

Example 3:



Constraints:

```
 Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]

```

```
Input: root = [1]
Output: [[1]]

```

```
Input: root = []
Output: []

```

"Tree","Breadth-first Search"

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
  * @return {number[][]}
  */
 var levelOrder = function(root) {
     if(root==null)return [];
     var out = [];
     
     function help(level, out, node){
         if(node==null)return;
         
         if(out.length<=level)out.push([]);
         
         out[level].push(node.val);
         
         help(level+1, out, node.left);
         help(level+1, out, node.right);
     }
     
     help(0, out, root);
     
     return out;
 }
 var levelOrder1 = function(root) {
     if(root==null)return [];
     
     var out = [];
     var que = [root];
     
     while(que.length!=0){
         var len = que.length;
         var temp = [];
         
         for(var i=0; i<len; i++){
             var node = que.shift();
             temp.push(node.val);
             
             if(node.left)que.push(node.left);
             if(node.right)que.push(node.right);
         }
         out.push(temp);
     }
     
     return out;
 };
 ​
```

BST Construction: [Link](/bst)

Sample tree:

```
           5
        /     \
       2       9
    /     \      \
    1     3       10
```

## Level Order traversal

[
[5],
[2,9],
[2,3,10]
]

## Recursive:

```javascript
var traversal = []

function levelOrder(root, level) {
  if (traversals.length <= level) {
    traversals.push([])
  }

  traversal[level].push(root.val)
  levelOrder(root.left, level + 1)
  levelOrder(root.right, level + 1)
}

levelOrder(root, 0)
```

## Iterative:

Breadth first search, using a queue.

```javascript
var traversal = []

var que = []
que.push(root)

while (que.length != 0) {
  var len = que.length
  var temp = []

  for (var i = 0; i < len; i++) {
    var node = que.shift()
    temp.push(node.val)

    if (node.left) que.push(node.left)
    if (node.right) que.push(node.right)
  }

  traversal.push(temp)
}
```
