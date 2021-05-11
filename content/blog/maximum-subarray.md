---
title: Maximum Subarray
date: "2020-06-16T22:12:03.284Z"
tags: ["Array", "Divide and Conquer", "Dynamic Programming"]
description: 2 Sum

status: todo
---

Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23

```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var currMax = nums[0]
  var max = nums[0]

  for (var i = 1; i < nums.length; i++) {
    currMax = Math.max(nums[i] + currMax, nums[i])
    max = Math.max(max, currMax)
  }

  return max
}
```
