---
title: Middle of a Linked List
slug: /middle-ll
date: "2020-06-16T22:12:03.284Z"
tags: ["LinkedList"]
description: Middle of a Linked List

status: doing
---

Middle of a Linked List

```javascript
var slow = node
var fast = node

while (fast.next != null && fast != null) {
  slow = slow.next
  fast = fast.next.next
}
```
