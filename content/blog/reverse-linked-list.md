---
title: Reverse Linked List
date: "2020-06-16T22:12:03.284Z"
tags: ["LinkedList"]
description: 2 Sum

status: done
---

> Linked list construction is covered [here](/ll)

## Example:

```
Linked list: [1,2,3,4,5]
Output: [5,4,3,2,1]
```

```
Linked List: []
Output: []
```

## Solution:

```javascript
var reverse = function (head) {
  var prev = null
  while (head != null) {
    var temp = head.next
    head.next = prev
    prev = head
    head = temp
  }
  return prev
}
```
