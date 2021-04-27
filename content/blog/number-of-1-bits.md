---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Number of 1 Bits
Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).

Note:

Example 1:

Example 2:

Example 3:

Constraints:

```
 Input: n = 00000000000000000000000000001011
Output: 3
Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.

```

```
Input: n = 00000000000000000000000010000000
Output: 1
Explanation: The input binary string 00000000000000000000000010000000 has a total of one '1' bit.

```

```
Input: n = 11111111111111111111111111111101
Output: 31
Explanation: The input binary string 11111111111111111111111111111101 has a total of thirty one '1' bits.

```

"Bit Manipulation"

```javascript
/**
  * @param {number} n - a positive integer
  * @return {number}
  */
 var hammingWeight = function(n) {
     var count = 0;
     
     while(n>0){
         if(n%2==1)count++;
         n= parseInt(n/2);
     }
     
     return count;
 };
 ​
```
