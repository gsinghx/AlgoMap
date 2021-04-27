---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Non-overlapping Intervals
Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you need to remove to make the rest of the intervals non-overlapping.



Example 1:

Example 2:

Example 3:



Constraints:

```
 Input: intervals = [[1,2],[2,3],[3,4],[1,3]]
Output: 1
Explanation: [1,3] can be removed and the rest of the intervals are non-overlapping.

```

```
Input: intervals = [[1,2],[1,2],[1,2]]
Output: 2
Explanation: You need to remove two [1,2] to make the rest of the intervals non-overlapping.

```

```
Input: intervals = [[1,2],[2,3]]
Output: 0
Explanation: You don't need to remove any of the intervals since they're already non-overlapping.

```

"Greedy"

```javascript
/**
  * @param {number[][]} intervals
  * @return {number}
  */
 var eraseOverlapIntervals = function(intervals) {
     intervals.sort((a,b)=>a[0]-b[0]);
     var count = 0;
     
     var x = 0;
     var y = 1;
     
     while(y<intervals.length){
         if(intervals[x][1] <= intervals[y][0]){
             x = y;
         }else{
             if(intervals[x][1]>=intervals[y][1]){
                 x = y;
             }
             count++;
         }
         
         y++;
     }
     
     return count;
 };
 ​
```
