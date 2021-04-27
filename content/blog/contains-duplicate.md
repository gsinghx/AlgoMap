---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Contains Duplicate
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Example 2:

Example 3:

Constraints:

```
 Input: nums = [1,2,3,1]
Output: true

```

```
Input: nums = [1,2,3,4]
Output: false

```

```
Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true

```

"Array","Hash Table"

```javascript
/**
  * @param {number[]} nums
  * @return {boolean}
  */
 var containsDuplicate = function(nums) {
     var map = new Map();
     for(var i=0; i<nums.length; i++){
         if(map.has(nums[i]))return true;
         map.set(nums[i], 1);
     }
     return false;
 };
 ​
```
