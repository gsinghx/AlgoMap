---
title: BST Post Order Traversal
date: "2020-06-16T22:12:03.284Z"
tags: ["Tree", "Traversal"]
description: BST Post Order Traversal

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

## Post Order traversal:

[1, 3, 2, 10, 9, 5]

## Recursive:

Trivial solution:

```javascript
var traversal = []

function preorder(root) {
  if (root == null) return

  preorder(root.left)
  preorder(root.right)
  traversal.push(root.val)
}
```

## Iterative:

Depth first search, using a stack.

```javascript
var traversal = []
var stack = []

while (stack.length != 0 || root != null) {
  if (root) {
    stack.push(root)
    root = root.left
  } else {
    var temp = stack[stack.length - 1]
    if (temp.right) {
      root = temp.right
    } else {
      temp = stack.pop()
      res.push(temp.val)

      while (stack.length != 0 && stack[stack.length - 1].right == temp) {
        temp = stack.pop()
        res.push(temp.val)
      }
    }
  }
}
```
