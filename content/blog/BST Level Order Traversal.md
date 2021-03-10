---
title: BST Level Order Traversal
slug: bst-level-order
date: "2020-06-16T22:12:03.284Z"
tags: ["Tree", "Traversal"]
description: BST Level Order Traversal
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

### Level Order traversal
[
   [5],
   [2,9],
   [2,3,10]
]

##### Recursive:
```javascript
var traversal = [];

function levelOrder(root, level){

   if(traversals.length <=level){
      traversals.push([]);
   }

   traversal[level].push(root.val);
   levelOrder(root.left, level+1);
   levelOrder(root.right, level+1);
}

levelOrder(root, 0);
```

##### Iterative:
Breadth first search, using a queue.
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
      
      if(node.left)que.push(node.left);
      if(node.right)que.push(node.right);
   }

   traversal.push(temp);
}
```
