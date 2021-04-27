---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Reverse Bits
Reverse bits of a given 32 bits unsigned integer.

Note:

Follow up:

If this function is called many times, how would you optimize it?

Example 1:

Example 2:

Constraints:

```
 Input: n = 00000010100101000001111010011100
Output:    964176192 (00111001011110000010100101000000)
Explanation: The input binary string 00000010100101000001111010011100 represents the unsigned integer 43261596, so return 964176192 which its binary representation is 00111001011110000010100101000000.

```

```
Input: n = 11111111111111111111111111111101
Output:   3221225471 (10111111111111111111111111111111)
Explanation: The input binary string 11111111111111111111111111111101 represents the unsigned integer 4294967293, so return 3221225471 which its binary representation is 10111111111111111111111111111111.

```

"Bit Manipulation"

```javascript
/**
  * @param {number} n - a positive integer
  * @return {number} - a positive integer
  */
 var reverseBits = function(n){
     var out = [];
     var res = 0;
     var pow = 0;
     
     while(n>0){
         out.push(n%2);
         n = parseInt(n/2);
     }
     
     while(out.length<32){
         out.push(0);
     }
     
     for(var i=31; i>=0; i--){
         res += out[i]*Math.pow(2, pow);
         pow++;
     }
     
     return res;
 }
 var reverseBits1 = function(n) {
     var out = 0;
     var pow = 31;
     var arr = []
     
     while(pow>=0){
         // out+=(n&1)<<pow;
         var temp = n&1;
         arr.push(temp);
         n = n>>1;
         pow-=1;
     }
     
     return parseInt(arr.join(""), 2);
 };
 ​
```
