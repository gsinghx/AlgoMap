---
title: BST Pre Order Traversal
date: "2020-06-16T22:12:03.284Z"
tags: ["Tree", "Traversal"]
description: BST Pre Order Traversal

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

## Pre Order traversal

The root element will come first, then the left child, then the right child.

`[5, 2, 1, 3, 9, 10]`

## Recursive solution:

```javascript
var traversal = []

function preorder(root) {
  if (root == null) return

  traversal.push(root.val)
  preorder(root.left)
  preorder(root.right)
}
```

## Iterative solution:

Depth first search, using a stack.

```javascript
var traversal = []

var stack = []
stack.push(root)

while (stack.length != 0) {
  var node = stack.pop()

  traversal.push(node.val)

  if (root.right) stack.push(root.right)
  if (root.left) stack.push(root.left)
}
```

## Other BST traversals:

- [Level Order Traversal](/bst-level-order)
- [Post Order Traversal](/bst-post-order)
- [In Order Traversal](/bst-in-order)
