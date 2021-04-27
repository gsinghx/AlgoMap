---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Sum of Two Integers
Given two integers a and b, return the sum of the two integers without using the operators + and -.



Example 1:

Example 2:



Constraints:

```
 Input: a = 1, b = 2
Output: 3

```

```
Input: a = 2, b = 3
Output: 5

```

"Bit Manipulation"

```javascript
/**
  * @param {number} a
  * @param {number} b
  * @return {number}
  */
 var getSum = function(a, b) {
     var ans = 0;
     var carry = 0;
     
     while(b){
         ans = a^b;
         carry = (a&b)<<1;
         a = ans;
         b = carry;
     }
     
     return ans;
 };
 ​
```
