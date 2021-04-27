---
title: Insert Intervals
date: "2020-06-16T22:12:03.284Z"
tags: ["Array", "Sort"]
description: 2 Sum

status: todo
---

Given a set of non-overlapping intervals, insert a new interval into the intervals (merge if necessary).

You may assume that the intervals were initially sorted according to their start times.

Example 1:

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]
Example 2:

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
Example 3:

Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]
Example 4:

Input: intervals = [[1,5]], newInterval = [2,3]
Output: [[1,5]]
Example 5:

Input: intervals = [[1,5]], newInterval = [2,7]
Output: [[1,7]]

```javascript
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  intervals.sort((a, b) => a[0] - b[0])
  var out = []
  var i = 0

  while (i < intervals.length && newInterval[0] > intervals[i][1]) {
    out.push(intervals[i])
    i++
  }
  var x = newInterval[0]
  var y = newInterval[1]

  while (i < intervals.length && y >= intervals[i][0]) {
    x = Math.min(x, intervals[i][0])
    y = Math.max(y, intervals[i][1])
    i++
  }
  out.push([x, y])

  while (i < intervals.length) {
    out.push(intervals[i])
    i++
  }

  return out
}
```
