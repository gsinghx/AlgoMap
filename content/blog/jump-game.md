---
title: Jump Game
date: "2020-06-16T22:12:03.284Z"
tags: ["Array", "Greedy"]
description: 2 Sum

status: todo
---

Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.

```javascript
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  var dp = new Array(nums.length).fill(0)
  dp[nums.length - 1] = true

  for (var i = nums.length - 2; i >= 0; i--) {
    var furthestJump = Math.min(nums.length - 1, i + nums[i])

    for (var j = 1 + i; j <= furthestJump; j++) {
      if (dp[j] == true) {
        dp[i] = true
        break
      }
    }
  }

  return dp[0]
}
```
