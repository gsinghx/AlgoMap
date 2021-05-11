---
title: Remove Nth Node From End of List
date: "2020-06-16T22:12:03.284Z"
tags: ["Linked List", "Two Pointers"]
description: 2 Sum

status: todo
---

Given the head of a linked list, remove the nth node from the end of the list and return its head.

Follow up: Could you do this in one pass?

Example 1:

Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
Example 2:

Input: head = [1], n = 1
Output: []
Example 3:

Input: head = [1,2], n = 1
Output: [1]

```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  if (head == null) return head

  var fast = head
  var slow = head

  while (n > 0) {
    fast = fast.next
    n--
  }

  if (fast == null) return head.next

  while (fast != null && fast.next != null) {
    fast = fast.next
    slow = slow.next
  }

  slow.next = slow.next.next

  return head
}
```
