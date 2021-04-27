---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Longest Consecutive Sequence
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.



Example 1:

Example 2:



Constraints:



```
 Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

```

```
Input: nums = [0,3,7,2,5,8,4,6,0,1]
Output: 9

```

"Array","Union Find"

```javascript
/**
  * @param {number[]} nums
  * @return {number}
  */
 var longestConsecutive = function(nums) {
     if(nums.length==0)return 0;
     nums.sort((a,b)=>a-b);
     var tempLen = 0;
     var len = 0;
     
     for(var i=0; i<nums.length-1; i++){
         if(nums[i]!=nums[i+1]){
             if(nums[i]+1==nums[i+1]){
                 tempLen++;
             }else{
                 len = Math.max(len, tempLen+1);
                 tempLen = 0;
             }
         }
     }
     len = Math.max(len, tempLen+1);
     
     return len;
 };
 ​
```
