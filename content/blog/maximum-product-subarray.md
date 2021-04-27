---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Maximum Product Subarray
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

It is guaranteed that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

Example 1:

Example 2:

Constraints:

```
 Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.

```

```
Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.

```

"Array","Dynamic Programming"

```javascript
/**
  * @param {number[]} nums
  * @return {number}
  */
 var maxProduct = function(nums) {
     var currMax = nums[0];
     var currMin = nums[0];
     var max = nums[0];
     
     for(var i=1; i<nums.length; i++){
         var temp1 = currMax * nums[i];
         var temp2 = currMin * nums[i];
         
         currMax = Math.max(nums[i], Math.max(temp1, temp2));
         currMin = Math.min(nums[i], Math.min(temp1, temp2));
         
         max = Math.max(max, currMax);
     }
     
     return max;
 };
 ​
```
