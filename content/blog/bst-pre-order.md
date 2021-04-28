---
title: BST Pre Order Traversal
date: "2020-06-16T22:12:03.284Z"
tags: ["Tree", "Traversal"]
description: BST Pre Order Traversal

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

## Pre Order traversal

[5, 2, 1, 3, 9, 10]

## Recursive:

Trivial solution:

```javascript
var traversal = []

function preorder(root) {
  if (root == null) return

  traversal.push(root.val)
  preorder(root.left)
  preorder(root.right)
}
```

## Iterative:

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
