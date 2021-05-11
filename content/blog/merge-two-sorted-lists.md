---
title: Merge Two Sorted Lists
date: "2020-06-16T22:12:03.284Z"
tags: ["Linked List", "Recursion"]
description: 2 Sum

status: todo
---

Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

Example 1:

Input: l1 = [1,2,4], l2 = [1,3,4]
Output: [1,1,2,3,4,4]
Example 2:

Input: l1 = [], l2 = []
Output: []
Example 3:

Input: l1 = [], l2 = [0]
Output: [0]

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  var dummy = new ListNode(0)
  var curr = dummy

  while (l1 != null && l2 != null) {
    if (l1.val < l2.val) {
      curr.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      curr.next = new ListNode(l2.val)
      l2 = l2.next
    }
    curr = curr.next
  }

  if (l1 != null) curr.next = l1
  if (l2 != null) curr.next = l2

  return dummy.next
}
```
