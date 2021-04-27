---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Product of Array Except Self
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.



Example 1:

Example 2:



Constraints:



Follow up:

```
 Input: nums = [1,2,3,4]
Output: [24,12,8,6]

```

```
Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]

```

"Array"

```javascript
/**
  * @param {number[]} nums
  * @return {number[]}
  */
 var productExceptSelf = function(nums) {
     var left = new Array(nums.length).fill(1);
     var right = new Array(nums.length).fill(1);
     
     for(var i=1; i<nums.length; i++){
         left[i] = left[i-1] * nums[i-1];
     }
     
     for(var i=nums.length-2; i>=0; i--){
         right[i] = right[i+1] * nums[i+1];
     }
     
     for(var i=0; i<nums.length; i++){
         nums[i] = left[i]*right[i];
     }
     
     return nums;
 };
 ​
```
