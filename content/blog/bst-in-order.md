---
title: BST In Order Traversal
date: "2020-06-16T22:12:03.284Z"
tags: ["Tree", "Traversal"]
description: BST In Order Traversal

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

## In Order traversal

The root element will be between the left and the right elements respectively.

`[1, 2, 3, 5, 9, 10]`

> Note: In order traversal of a BST results in a sorted list.

## Recursive solution:

```javascript
var traversal = []

function preorder(root) {
  if (root == null) return

  preorder(root.left)
  traversal.push(root.val)
  preorder(root.right)
}
```

## Iterative solution:

Depth first search, using a stack.

```javascript
var traversal = []

var stack = []

while (stack.length != 0 || root != null) {
  while (root != null) {
    stack.push(root)
    root = root.left
  }

  var node = stack.pop()
  traversal.push(node.val)
  root = node.right
}
```

## Other BST traversals:

- [Level Order Traversal](/bst-level-order)
- [Post Order Traversal](/bst-post-order)
- [Pre Order Traversal](/bst-pre-order)
