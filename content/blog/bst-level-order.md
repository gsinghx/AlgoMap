---
title: BST Level Order Traversal
date: "2020-06-16T22:12:03.284Z"
tags: ["Tree", "Traversal", "BFS"]
description: BST Level Order Traversal

status: done
---

> BST Construction is covered [here](/bst).

Sample tree:

```
           5
        /     \
       2       9
    /     \      \
    1     3       10
```

## Post Order traversal:

Each node level by level.

```
[
  [5],
  [2, 9],
  [1, 3, 10]
]
```

## Recursive solution:

```javascript
var levelOrder = function (root) {
  if (root == null) return []
  var out = []
  function help(level, out, node) {
    if (node == null) return
    if (out.length <= level) out.push([])
    out[level].push(node.val)
    help(level + 1, out, node.left)
    help(level + 1, out, node.right)
  }
  help(0, out, root)
  return out
}
```

## Iterative solution:

Breadth first search, using a queue.

```javascript
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

## Other BST traversals:

- [Pre Order Traversal](/bst-pre-order)
- [Post Order Traversal](/bst-post-order)
- [In Order Traversal](/bst-in-order)
