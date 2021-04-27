---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Reorder List
You are given the head of a singly linked-list. The list can be represented as:

Reorder the list to be on the following form:

You may not modify the values in the list's nodes. Only nodes themselves may be changed.



Example 1:

Example 2:



Constraints:

```
 L0 → L1 → … → Ln - 1 → Ln

```

```
L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …

```

```
Input: head = [1,2,3,4]
Output: [1,4,2,3]

```

```
Input: head = [1,2,3,4,5]
Output: [1,5,2,4,3]

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
  * @return {void} Do not return anything, modify head in-place instead.
  */
 var reorderList = function(head) {
     if(head==null || head.next==null)return head;
     var slow = head;
     var fast = head;
     var prev = null;
     
     while(fast!=null && fast.next!=null){
         prev = slow;
         slow = slow.next;
         fast = fast.next.next;
     }
     prev.next = null;
     
     var list2 = null;
     while(slow!=null){
         var temp = slow.next;
         
         slow.next = list2;
         list2 = slow;
         slow = temp;
     }
     
     var list1 = head;
     
     while(list1!=null && list1.next!=null){
         var temp = list1.next;
         list1.next = list2;
         list2 = list2.next;
         
         list1.next.next = temp;
         list1 = list1.next.next;
     }
     list1.next = list2;
     
     return head;
 };
 ​
```
