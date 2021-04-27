---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Coin Change
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.

You may assume that you have an infinite number of each kind of coin.



Example 1:

Example 2:

Example 3:

Example 4:

Example 5:



Constraints:

```
 Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

```

```
Input: coins = [2], amount = 3
Output: -1

```

```
Input: coins = [1], amount = 0
Output: 0

```

```
Input: coins = [1], amount = 1
Output: 1

```

```
Input: coins = [1], amount = 2
Output: 2

```

"Dynamic Programming"

```javascript
/**
  * @param {number[]} coins
  * @param {number} amount
  * @return {number}
  */
 var coinChange = function(coins, amount) {
     if(amount==0)return 0;
     
     var dp = new Array(amount+1).fill(Infinity);
     dp[0] = 0;
     
     for(var i=1; i<amount+1; i++){
         for(var j=0; j<coins.length; j++){
             if(i-coins[j]>=0){
                 dp[i] = Math.min(dp[i], 1+ dp[i-coins[j]]);
             }
         }
     }
     
     return dp[amount]==Infinity?-1:dp[amount];
 };
 ​
```
