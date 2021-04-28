---
title: 4 Sum
date: "2020-06-16T22:12:03.284Z"
tags: ["Array", "Hash Table", "Two Pointers"]
description: 4 Sum

status: done
---

Given an array of integers, return an array of all the unique quadruplets.

Example 1:

```
Input: nums = [1,0,-1,0,-2,2], target = 0
Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
```

Example 2:

```
Input: nums = [2,2,2,2,2], target = 8
Output: [[2,2,2,2]]

```

## Solution:

```javascript
 var fourSum = function(nums, target) {
     nums.sort((a,b)=>a-b);
     var res = {};
 ​
     function findPair(target, indices, startIndex){
         var endIndex = nums.length-1;
         
         while(startIndex<endIndex){
             var sum = nums[startIndex]+nums[endIndex];
             
             if(sum==target){
                 res[indices.concat([nums[startIndex], nums[endIndex] ]).join(",")] = 1;
                 
                 startIndex++;
                 endIndex--;
                 
                 while(startIndex<endIndex && nums[startIndex]==nums[startIndex-1])startIndex++;
                 while(startIndex<endIndex && nums[endIndex]==nums[endIndex+1])endIndex--;
             }else if(sum>target){
                 endIndex--;
             }else{
                 startIndex++;
             }
         }
     }
     
     for(var i=0; i<nums.length; i++){
         for(var j=i+1; j<nums.length; j++){
             findPair(target-(nums[i]+nums[j]), [nums[i], nums[j]], j+1);
         }
     }
 ​
     return Object.keys(res).map(e=>e.split(",").map(ee=>parseInt(ee)));
 };
 ​
```
