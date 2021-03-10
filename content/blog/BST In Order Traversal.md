---
title: BST In Order Traversal
slug: bst-in-order
date: "2020-06-16T22:12:03.284Z"
tags: ["Tree", "Traversal"]
description: BST In Order Traversal
draft: false
---

BST Construction: [Link](https://dontforgetagain.netlify.app/bst)

Sample tree:
```
           5
        /     \
       2       9
    /     \      \
    1     3       10
```


### In Order traversal
[1, 2, 3, 5, 9, 10]  
Results in a sorted list.

##### Recursive:
Trivial solution:
```javascript
var traversal = [];

function preorder(root){
   if(root==null)return;

   preorder(root.left);
   traversal.push(root.val);
   preorder(root.right);
}
```

##### Iterative:
Depth first search, using a stack.
```javascript

```
