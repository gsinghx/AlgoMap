---
title: Climbing Stairs
date: "2020-06-16T22:12:03.284Z"
tags: ["Dynamic Programming"]
description: 2 Sum

status: todo
---

You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

```
Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.

1. 1 step + 1 step
2. 2 steps
```

Example 2:

```
Input: n = 3
Output: 3
Explanation: There are three ways to climb to the top.

1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
```

## Solution:

```javascript
var climbStairs = function (n) {
  var dp = new Array(n).fill(-1)

  function help(rem) {
    if (rem == 0) return 1
    if (rem < 0) return 0

    if (dp[rem] != -1) return dp[rem]

    dp[rem] = help(rem - 1) + help(rem - 2)

    return dp[rem]
  }

  return help(n - 1) + help(n - 2)
}
```
