---
title: Linked List Construction
slug: /ll
date: "2020-06-16T22:12:03.284Z"
tags: ["Linked List", "Construction"]
description: Linked List Construction

status: done
---

Properties of a Linked List:

- A linked list consists of 'nodes' linked together.
- Each 'node' has two fields/properties:
  - Some data/value
  - A link to the next node

## A linked list node:

```javascript
var ListNode = function (val) {
  this.val = val
  this.next = null
}
```

## Constructing a Linked List:

```javascript
var root = new ListNode(0)
root.next = new ListNode(0)
root.next.next = new ListNode(0)
```

## Constructing a Linked List from an array:

```javascript
var arr = [1, 2, 3, 4, 5]

var root = new ListNode(0) //Dummy value. Done to remember where the linked list actually starts from.
var curr = root

for (var i = 0; i < arr.length; i++) {
  curr.next = new ListNode(arr[i])
  curr = curr.next
}

var startOfList = root.next
```
