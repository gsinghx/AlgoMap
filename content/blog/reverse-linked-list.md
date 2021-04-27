---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Reverse Linked List
Given the head of a singly linked list, reverse the list, and return the reversed list.

Example 1:

Example 2:

Example 3:

Constraints:

Follow up: A linked list can be reversed either iteratively or recursively. Could you implement both?

```
 Input: head = [1,2,3,4,5]
Output: [5,4,3,2,1]

```

```
Input: head = [1,2]
Output: [2,1]

```

```
Input: head = []
Output: []

```

"Linked List"

```javascript
/**
  * Definition for singly-linked list.
  * function ListNode(val, next) {
  *     this.val = (val===undefined ? 0 : val)
  *     this.next = (next===undefined ? null : next)
  * }
  */
 /**
  * @param {ListNode} head
  * @return {ListNode}
  */
 var reverseList = function(head) {
     var prev = null;
     
     while(head!=null){
         var temp = head.next;
         head.next = prev;
         prev = head;
         head = temp;
     }
     
     return prev;
 };
 ​
```
