---
title: BST In Order Traversal
slug: /bst-in-order
date: "2020-06-16T22:12:03.284Z"
tags: ["Tree", "Traversal"]
description: BST In Order Traversal

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

## In Order traversal

[1, 2, 3, 5, 9, 10]

> In order traversal of a BST results in a sorted list.

## Recursive:

Trivial solution:

```javascript
var traversal = []

function preorder(root) {
  if (root == null) return

  preorder(root.left)
  traversal.push(root.val)
  preorder(root.right)
}
```

## Iterative:

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
