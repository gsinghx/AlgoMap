---
title: Middle of a Linked List
date: "2020-06-16T22:12:03.284Z"
tags: ["LinkedList", "TwoPointer"]
description: Middle of a Linked List

status: done
---

> Linked List construction is covered [here](/ll)

## Example

```
Linked List: 1->2->3->4->5
Middle: 3
```

```
Linked List: 1->2->3->4
Middle: 2
```

## Solution:

```javascript
var middle = function (listHead) {
  var slow = listHead
  var fast = listHead

  while (fast != null && fast.next != null) {
    slow = slow.next
    fast = fast.next
    if (fast.next == null) {
      break
    }
    fast = fast.next
  }

  return slow
}
```
