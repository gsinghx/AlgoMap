---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Minimum Window Substring
Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".

Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.

Example 1:

Example 2:

Constraints:

```
 Input: s = "ADOBECODEBANC", t = "ABC"
Output: "BANC"

```

```
Input: s = "a", t = "a"
Output: "a"

```

```
L ------------------------ R , Suppose this is the window that contains all characters of T

       L----------------- R , this is the contracted window. We found a smaller window that still contains all the characters in T

When the window is no longer valid, start expanding again using the right pointer.
```

"Hash Table","Two Pointers","String","Sliding Window"

```javascript
/**
  * @param {string} s
  * @param {string} t
  * @return {string}
  */
 var minWindow = function(s, t) {
     var windowLen = 0;
     var windowMap = new Map();
     var subLen = 0;
     var subMap = new Map();
     var res = "";
     var left = 0;
     
     for(var ch of t){
         if(!subMap.has(ch))subMap.set(ch, 1);
         else subMap.set(ch, 1+subMap.get(ch));
     }
     subLen = subMap.size;
     
     for(var right = 0; right<s.length; right++){
         var ch = s[right];
         
         if(!windowMap.has(ch))windowMap.set(ch, 1);
         else windowMap.set(ch, 1+windowMap.get(ch));
         
         if(windowMap.get(ch)==subMap.get(ch))windowLen++;
         
         while(windowLen==subLen && left<=right){
             var leftChar = s[left];
             var temp = s.substr(left, right-left+1);
             if(res=="" || res.length>temp.length){
                 res = temp;
             }
             
             windowMap.set(leftChar, windowMap.get(leftChar)-1);
             left++;
             if(windowMap.get(leftChar)<subMap.get(leftChar)){
                 windowLen--;
             }
         }
     }
     
     return res;
 };
 ​
```
