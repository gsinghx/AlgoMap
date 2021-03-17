---
title: BST Construction
slug: /bst
date: "2020-06-16T22:12:03.284Z"
tags: ["Tree", "Construction"]
description: BST Construction

status: done
---

Properties of BST:

- Binary tree
- Value of root node greater than its left child and less than right child

### A tree Node:

```javascript
var TreeNode = function (val) {
  this.val = val
  this.left = null
  this.right = null
}
```

### Naive approach to construct a BST:

```javascript
var root = new TreeNode(1)
root.left = new TreeNode(0)
root.right = new TreeNode(2)
root.left.left = new TreeNode(3)
root.right.right = new TreeNode(4)
```

### Constructing BST from an array representing a tree:

Consider a tree:

```
           5
        /     \
       2       9
    /     \      \
    1     3       10
```

The above tree can be represented in an array like:

```
[5, 2, 9, 1, 3, null, 10]
```

Explanation:

- The array starts with the root element 5, position i=0.
- Any node's left element = 2\*i + 1
- Any node's right element = 2\*i + 2

Constructing a tree from this array:

```javascript
function constructTree(arr, i) {
  if (i >= arr.length) return null

  var node = new TreeNode(arr[i])
  node.left = constructTree(arr, 2 * i + 1)
  node.right = constructTree(arr, 2 * i + 2)

  return node
}

var root = constructTree([5, 2, 9, 1, 3, null, 10], 0)
```
