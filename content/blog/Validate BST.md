---
title: Validate BST
slug: /validate-bst
date: "2020-06-16T22:12:03.284Z"
tags: ["Tree"]
description: Validate BST

status: doing
---

BST Construction

2 ways:

- Preorder traversal
- Recursive

```javascript
function validateBST(node, lowerBound, upperBound) {
  if (node == null) return true

  if (
    (lowerBound != null && node.val <= lowerBound) ||
    (upperBound != null && node.val >= upperBound)
  )
    return false

  return (
    validateBST(node.left, lowerBound, node.val) &&
    validateBST(node.right, node.val, upperBound)
  )
}

validateBST(node, null, null)
```
