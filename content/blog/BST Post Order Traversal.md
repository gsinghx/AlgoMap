---
title: BST Post Order Traversal
slug: /bst-post-order
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

### Post Order traversal

[1, 3, 2, 10, 9, 5]

##### Recursive:

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

##### Iterative:

Depth first search, using a stack.

```javascript

```
