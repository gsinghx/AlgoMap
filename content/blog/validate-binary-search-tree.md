---
title: Validate Binary Search Tree
date: "2020-06-16T22:12:03.284Z"
tags: ["Tree", "DFS", "Recursion"]
description: 2 Sum

status: done
---

> Binary search tree (BST) construction and its properties is covered [here](/bst)

Given the root of a binary tree, validate if it actually is a binary search tree (BST).

## Example:

```
  2
 /  \
1    3

BST: [2,1,3]
Output: true
```

```
        5
      /   \
    1       4
  /  \     / \
null null 3   6

BST: [5,1,4,null,null,3,6]
Output: false
Explanation: The root node's value is 5 but its right child's value is 4.
```

## Naive Recursive solution:

```javascript
var isValidBST = function (root) {
  if (root == null) return true
  if (
    !allGreaterNodes(root.right, root.val) ||
    !allLesserNodes(root.left, root.val)
  )
    return false
  return isValidBST(root.left) && isValidBST(root.right)
}

var allGreaterNodes = function (root, val) {
  if (root == null) return true

  if (root.val < val) return false

  return allGreaterNodes(root.left, val) && allGreaterNodes(root.right, val)
}
var allLesserNodes = function (root, val) {
  if (root == null) return true

  if (root.val > val) return false

  return allLesserNodes(root.left, val) && allLesserNodes(root.right, val)
}
```

## Better Recursive solution:

```javascript
var isValidBST = function (root) {
  if (root == null) return true
  function help(root, lowerBound, upperBound) {
    if (root == null) return true
    if (lowerBound != null && root.val <= lowerBound) return false
    if (upperBound != null && root.val >= upperBound) return false
    return (
      help(root.left, lowerBound, root.val) &&
      help(root.right, root.val, upperBound)
    )
  }
  return help(root, null, null)
}
```

## Iterative solution:

```javascript
var isValidBST = function (root) {
  var prev = -Infinity
  var stack = []
  while (root != null || stack.length != 0) {
    while (root != null) {
      stack.push(root)
      root = root.left
    }
    var node = stack.pop()
    if (node.val <= prev) {
      return false
    }
    prev = node.val
    root = node.right
  }
  return true
}
```
