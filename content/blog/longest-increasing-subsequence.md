---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Longest Increasing Subsequence
Given an integer array nums, return the length of the longest strictly increasing subsequence.

A subsequence is a sequence that can be derived from an array by deleting some or no elements without changing the order of the remaining elements. For example, [3,6,2,7] is a subsequence of the array [0,3,1,6,2,2,7].



Example 1:

Example 2:

Example 3:



Constraints:



Follow up:

```
 Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

```

```
Input: nums = [0,1,0,3,2,3]
Output: 4

```

```
Input: nums = [7,7,7,7,7,7,7]
Output: 1

```

"Binary Search","Dynamic Programming"

```javascript
/**
  * @param {number[]} nums
  * @return {number}
  */
 var lengthOfLIS = function(nums) {
     if(nums.length<2)return nums.length;
     
     var len = 0;
     var dp = new Array(nums.length).fill(0);
 ​
     dp[0] = 1;
     
     for(var i=1; i<nums.length; i++){
         var count = 0;
         
         for(var j=0; j<i; j++){
             if(nums[i]>nums[j])
                 count = Math.max(count, dp[j]);
         }
         
         dp[i] = count+1;
         len = Math.max(len, dp[i])
     }
     
     return len;
 }
     
 var lengthOfLIS2 = function(nums) {
     if(nums.length<2)return nums.length;
     
     var mem = new Array(nums.length).fill(0).map(e=>new Array(nums.length).fill(-1));
     
     function help(curr, index){
         if(index==nums.length)return 0;
         
         if(mem[curr+1][index]>=0){
             return mem[curr+1][index];
         }
         
         var incl = 0;
         if(curr==-1 ||  nums[index]>nums[curr]){
             incl = 1+ help(index, index+1);
         }
         var excl = help(curr, index+1);
         
         mem[curr+1][index] = Math.max(incl, excl);
         return mem[curr+1][index];
     }
     var out = help(-1,  0);
     
     return out;
 };
 ​
```
