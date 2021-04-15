---
title: 2 Sum
slug: /2-sum
date: "2020-06-16T22:12:03.284Z"
tags: ["Map"]
description: 2 Sum

status: doing
---

```javascript
var nums = []
var map = new Map()

for (var i = 0; i < nums.length; i++) {
  if (!map.has(-nums[i])) {
    map.set(nums[i], i)
  } else {
    return [map.get(-nums[i]), i]
  }
}
```
