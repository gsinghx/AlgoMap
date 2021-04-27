---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Find Minimum in Rotated Sorted Array
Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

Example 1:

Example 2:

Example 3:

Constraints:

```
 Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.

```

```
Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.

```

```
Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times.

```

"Array","Binary Search"

```javascript
/**
  * @param {number[]} nums
  * @return {number}
  */
 var findMin = function(nums) {
     var left = 0;
     var right = nums.length-1;
     if(nums[left]<=nums[right])return nums[left];
     
     while(left<right && nums[left]>nums[right]){
         var mid = parseInt((right-left)/2)+left;
         
         if(nums[left]<=nums[mid]){
             left = mid+1;
         }else{
             right = mid;
         }
     }
     
     return nums[left]
 };
 ​
```
