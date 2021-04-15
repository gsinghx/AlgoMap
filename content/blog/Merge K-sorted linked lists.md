---
title: Merge K-sorted Lists
slug: /merge-k-lists
date: "2020-06-16T22:12:03.284Z"
tags: ["LinkedList", "Heap"]
description: Merge K-sorted Lists

status: doing
---

```javascript
var ListNode = function (val, next) {
  this.val = val
  this.next = next
}

var mergeKLists = function (lists) {
  var heap = []
  for (var list of lists) {
    if (list != null) heap.push(list)
  }
  for (var i = parseInt(heap.length / 2) - 1; i >= 0; i--) {
    heapify(heap, i)
  }

  var dummy = new ListNode(0)
  var curr = dummy

  while (heap[0] != null) {
    curr.next = new ListNode(heap[0].val)
    curr = curr.next
    heap[0] = heap[0].next
    if (heap[0] == null) {
      heap[0] = heap.pop()
    }
    heapify(heap, 0)
  }

  return dummy.next
}

var heapify = function (heap, i) {
  var min = i
  var left = 2 * i + 1
  var right = 2 * i + 2

  if (left < heap.length && heap[left].val < heap[min].val) {
    min = left
  }
  if (right < heap.length && heap[right].val < heap[min].val) {
    min = right
  }

  if (min != i) {
    ;[heap[min], heap[i]] = [heap[i], heap[min]]

    heapify(heap, min)
  }
}
```
