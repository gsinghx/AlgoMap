---
title: Search in Rotated Sorted Array
date: "2020-06-16T22:12:03.284Z"
tags: ["BinarySearch"]
description: Search in Rotated Sorted Array

status: todo
---

There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4
Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1
Example 3:

Input: nums = [1], target = 0
Output: -1

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  var left = 0
  var right = nums.length - 1

  while (left <= right) {
    var mid = parseInt((right - left) / 2) + left

    if (nums[mid] == target) return mid

    if (nums[left] < nums[mid]) {
      if (nums[left] <= target && nums[mid - 1] >= target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid + 1] <= target && nums[right] >= target) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return -1
}
```
