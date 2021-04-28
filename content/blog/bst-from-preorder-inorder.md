---
title: BST from Preorder and Inorder Traversals
date: "2020-06-16T22:12:03.284Z"
tags: ["Array", "Tree", "Depth-first Search"]
description: BST from Preorder and Inorder Traversals

status: done
---

Construct Binary Tree from Preorder and Inorder Traversal
Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and inorder is the inorder traversal of the same tree, construct and return the binary tree.

Example 1:

```
 Input: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
Output: [3,9,20,null,null,15,7]

```

Example 2:

```
Input: preorder = [-1], inorder = [-1]
Output: [-1]

```

## Solution:

```javascript

   function TreeNode(val, left, right) {
       this.val = (val===undefined ? 0 : val)
       this.left = (left===undefined ? null : left)
       this.right = (right===undefined ? null : right)
   }

 var buildTree = function(preorder, inorder) {
     
     if(preorder.length==0)return null;
     
     var root = new TreeNode(preorder[0]);
     
     var inPos = inorder.indexOf(preorder[0]);
     root.left = buildTree(preorder.slice(1, inPos+1), inorder.slice(0, inPos));
     root.right = buildTree(preorder.slice(1+inPos), inorder.slice(inPos+1));
     
     return root;
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

## Given traversals:

In order: [1, 2, 3, 5, 9, 10]  
Pre order: [5, 2, 1, 3, 9, 10]

## Recursive:

```javascript
var inorderTraversal = [1, 2, 3, 5, 9, 10]
var preorderTraversal = [5, 2, 1, 3, 9, 10]

function createNode(inorder, preorder) {
  if (inorder.length == 0) return null

  var inorderPosition = inorder.indexOf(preorder[0])

  var node = new TreeNode(preorder[0])
  node.left = createNode(
    inorder.slice(0, inorderPosition),
    preorder.slice(0, inorderPosition)
  )
  node.right = createNode(
    inorder.slice(inorderPosition),
    preorder.slice(inorderPosition)
  )

  return node
}

var root = createNode(inorderTraversal, preorderTraversal)
```

## Iterative:
