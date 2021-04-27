---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Longest Repeating Character Replacement
You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.



Example 1:

Example 2:



Constraints:

```
 Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.

```

```
Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.

```

"Two Pointers","Sliding Window"

```javascript
/**
  * @param {string} s
  * @param {number} k
  * @return {number}
  */
 var characterReplacement = function(s, k) {
     var map = new Map();
     var len = 0;
     var left = 0;
     var repeat = 0;
     
     for(var right = 0; right<s.length; right++){
         var ch = s[right];
         
         if(!map.has(ch))map.set(ch, 1);
         else map.set(ch, map.get(ch)+1);
         
         repeat = Math.max(repeat, map.get(ch));
         
         if(right-left+1 > k+repeat){
             map.set(s[left], map.get(s[left])-1);
             left++;
         }
         
         len = Math.max(len, right-left+1);
     }
     
     return len;
 };
 ​
```
