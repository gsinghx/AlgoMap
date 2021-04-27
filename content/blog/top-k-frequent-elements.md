---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Top K Frequent Elements
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.



Example 1:

Example 2:



Constraints:



Follow up: Your algorithm's time complexity must be better than O(n log n), where n is the array's size.

```
 Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]

```

```
Input: nums = [1], k = 1
Output: [1]

```

"Hash Table","Heap"

```javascript
/**
  * @param {number[]} nums
  * @param {number} k
  * @return {number[]}
  */
 var heapify = function(arr, i){
     var largest = i;
     var left = 2*i+1;
     var right = 2*i+2;
     if(left<arr.length && arr[left][1]>arr[largest][1]){
         largest = left;
     }
     if(right<arr.length && arr[right][1]>arr[largest][1]){
         largest = right;
     }
     if(largest!=i){
         var temp = arr[i];
         arr[i] = arr[largest];
         arr[largest] = temp;
         
         heapify(arr, largest);
     }
 }
 var topKFrequent = function(nums, k) {
     var heap = [];
     var map = new Map();
     var res = [];
     
     for(var num of nums){
         if(!map.has(num))map.set(num, 1);
         else map.set(num, map.get(num)+1);
     }
     
     for(var key of map.keys()){
         heap.push([key, map.get(key)]);
     }
     
     for(var i=parseInt(heap.length/2)-1; i>=0; i--){
         heapify(heap, i);
     }
     
     for(var i=0; i<k; i++){
         res.push(heap[0][0]);
         
         heap[0] = heap.pop();
         heapify(heap, 0);
     }
     
     return res;
 };
 ​
```
