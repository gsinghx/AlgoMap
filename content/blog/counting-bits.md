---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Counting Bits
Given an integer num, return an array of the number of 1's in the binary representation of every number in the range [0, num].



Example 1:

Example 2:



Constraints:



Follow up:

```
 Input: num = 2
Output: [0,1,1]
Explanation:
0 --> 0
1 --> 1
2 --> 10

```

```
Input: num = 5
Output: [0,1,1,2,1,2]
Explanation:
0 --> 0
1 --> 1
2 --> 10
3 --> 11
4 --> 100
5 --> 101

```

"Dynamic Programming","Bit Manipulation"

```javascript
/**
  * @param {number} num
  * @return {number[]}
  */
 var countBits = function(num) {
     var dp = new Array(num+1).fill(0);
     var pow = 2;
     
     for(var i=1; i<=num; i++){
         if(i%pow==0){
             dp[i] = 1;
             pow=i;
         }else{
             dp[i] = 1+dp[i%pow];
         }
     }
     
     return dp;
 };
 ​
```
