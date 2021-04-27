---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Serialize and Deserialize Binary Tree
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

Clarification: The input/output format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.



Example 1:

Example 2:

Example 3:

Example 4:



Constraints:

```
 Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]

```

```
Input: root = []
Output: []

```

```
Input: root = [1]
Output: [1]

```

```
Input: root = [1,2]
Output: [1,2]

```

"Tree","Design"

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
  * Encodes a tree to a single string.
  *
  * @param {TreeNode} root
  * @return {string}
  */
 var serialize = function(root) {
     if(root==null) return "";
     
     var que = [root];
     var res = [];
     while(que.length!=0){
         var len = que.length;
         var nullFlag = true;
         
         for(var i=0; i<len; i++){
             var node = que.shift();
             res.push(node==null?null:node.val);
             
             if(node){
                 nullFlag = false;
                 
                 que.push(node.left);
                 que.push(node.right);
             }
         }
         
         if(nullFlag){
             que = [];
         }
     }
     
     return res.join(",");
 };
 ​
 /**
  * Decodes your encoded data to tree.
  *
  * @param {string} data
  * @return {TreeNode}
  */
 var deserialize = function(data) {
     var bfs = data.split(",").map(e=>parseInt(e));
     if(bfs.length==0 || data=="")return null;
     
     
     var root = new TreeNode(bfs.shift());
     var que = [root];
 ​
     while(bfs.length!=0){
         var leftVal = bfs.shift();
         var left = isNaN(leftVal)?null:new TreeNode(leftVal);
         
         var rightVal = bfs.shift();
         var right = isNaN(rightVal)?null: new TreeNode(rightVal);
         
         var node = que.shift();
 ​
```
