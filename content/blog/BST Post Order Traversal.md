---
title: BST Post Order Traversal
slug: bst-post-order
date: "2020-06-16T22:12:03.284Z"
tags: ["Tree", "Traversal"]
description: BST Post Order Traversal
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

### Pre Order traversal
[5, 2, 1, 3, 9, 10]

##### Recursive:
Trivial solution:
```javascript
var traversal = [];

function preorder(root){
   if(root==null)return;

   traversal.push(root.val);
   preorder(root.left);
   preorder(root.right);
}
```

##### Iterative:
Depth first search, using a stack.
```javascript
var traversal = [];

var stack = [];
stack.push(root);

while(stack.length!=0){
   var node = stack.pop();

   traversal.push(node.val);

   if(root.right) stack.push(root.right);
   if(root.left) stack.push(root.left);
}
```

### Post Order traversal
[1, 3, 2, 10, 9, 5]

##### Recursive:
Trivial solution:
```javascript
var traversal = [];

function preorder(root){
   if(root==null)return;

   preorder(root.left);
   preorder(root.right);
   traversal.push(root.val);
}
```
##### Iterative:
Depth first search, using a stack.
```javascript

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


### Level Order traversal
[[1], [2, 9], [1, 3, 10]]   
Breadth first search on a tree.

##### Recursive:
```javascript
var traversal = [];

function levelOrder(root){
   if(root==null)return;

   preorder(root.left);
   traversal.push(root.val);
   preorder(root.right);
}
```

##### Iterative:
```javascript
var traversal = [];

var que = [];
que.push(root);

while(que.length!=0){
   var len = que.length;
   var temp = [];

   for(var i=0; i<len; i++){
      var node = que.shift();

      temp.push(node.val);
      if(node.left) que.push(node.left);
      if(node.right) que.push(node.right);
   }

   traversal.push(temp);
}
```


