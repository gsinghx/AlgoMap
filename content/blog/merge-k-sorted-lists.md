---
title: Merge k Sorted Lists
slug: /merge-k-sorted-lists
date: "2020-06-16T22:12:03.284Z"
tags: ["Linked List", "Heap"]
description: 2 Sum

status: todo
---

You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.

Merge all the linked-lists into one sorted linked-list and return it.

Example 1:

Input: lists = [[1,4,5],[1,3,4],[2,6]]
Output: [1,1,2,3,4,4,5,6]
Explanation: The linked-lists are:
[
1->4->5,
1->3->4,
2->6
]
merging them into one sorted list:
1->1->2->3->4->4->5->6
Example 2:

Input: lists = []
Output: []
Example 3:

Input: lists = [[]]
Output: []

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  var dummy = new ListNode(0)
  var curr = dummy
  var heap = []

  for (var list of lists) {
    if (list != null) heap.push(list)
  }
  for (var i = parseInt(heap.length / 2) - 1; i >= 0; i--) {
    heapify(heap, i)
  }

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
