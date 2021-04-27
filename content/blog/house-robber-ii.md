---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

House Robber II
You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.

Example 1:

Example 2:

Example 3:

Constraints:

```
 Input: nums = [2,3,2]
Output: 3
Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.

```

```
Input: nums = [1,2,3,1]
Output: 4
Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
Total amount you can rob = 1 + 3 = 4.

```

```
Input: nums = [0]
Output: 0

```

"Dynamic Programming"

```javascript
/**
  * @param {number[]} nums
  * @return {number}
  */
 var rob = function(nums) {
     if(nums.length==1)return nums[0];
     
     var n = nums.length;
     var dp1 = new Array(n).fill(0);
     var dp2 = new Array(n).fill(0);
     
     dp1[0] = nums[0];
     dp1[1] = Math.max(nums[0], nums[1]);
     
     for(var i=2; i<n-1; i++){
         dp1[i] = Math.max(dp1[i-1], dp1[i-2]+nums[i]);
     }
     
     dp2[1] = nums[1];
     dp2[2] = Math.max(nums[1], nums[2]);
     
     for(var i=3; i<n; i++){
         dp2[i] = Math.max(dp2[i-1], dp2[i-2]+nums[i]);
     }
     
     return Math.max(dp1[n-2], dp2[n-1]);
 };
 ​
```
