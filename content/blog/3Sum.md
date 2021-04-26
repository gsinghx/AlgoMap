---
title: 3 Sum
slug: /3-sum
date: "2020-06-16T22:12:03.284Z"
tags: ["Array", "Two Pointer"]
description: 3 Sum

status: todo
---

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []

```javascript
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b)
  var out = []

  function findPair(curr, target) {
    var left = curr + 1
    var right = nums.length - 1

    while (left < right) {
      var currSum = nums[left] + nums[right]
      if (currSum == target) {
        out.push([nums[curr], nums[left], nums[right]])
        left++
        right--
        while (left < right && nums[left] == nums[left - 1]) left++
        while (left < right && nums[right] == nums[right + 1]) right--
      } else if (currSum < target) {
        left++
      } else {
        right--
      }
    }
  }

  for (var i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue
    findPair(i, -nums[i])
  }

  return out
}
```
