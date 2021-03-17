---
title: BST from Preorder and Inorder Traversals
slug: /bst-from-preorder-inorder
date: "2020-06-16T22:12:03.284Z"
tags: ["Tree", "Traversal"]
description: BST from Preorder and Inorder Traversals

status: done
---

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

```javascript

```
