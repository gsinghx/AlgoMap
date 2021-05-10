---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: ["Map", "Array"]
description: 2 Sum

status: done
---

Find two numbers from the array that sum to the given target.

Example 1:

```
Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: nums[0] + nums[1] == 9, so we return [0, 1]
```

Example 2:

```
Input: nums = [3,2,4], target = 6
Output: [1,2]
```

Example 3:

```
Input: nums = [3,3], target = 6
Output: [0,1]
```

## Solution:

```javascript
var twoSum = function (nums, target) {
  var map = new Map()

  for (var i = 0; i < nums.length; i++) {
    if (map.has(target - nums[i])) {
      return [map.get(target - nums[i]), i]
    } else {
      map.set(nums[i], i)
    }
  }
}
```
