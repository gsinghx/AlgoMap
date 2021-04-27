---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Valid Anagram
Given two strings s and t, return true if t is an anagram of s, and false otherwise.



Example 1:

Example 2:



Constraints:



Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

```
 Input: s = "anagram", t = "nagaram"
Output: true

```

```
Input: s = "rat", t = "car"
Output: false

```

"Hash Table","Sort"

```javascript
/**
  * @param {string} s
  * @param {string} t
  * @return {boolean}
  */
 var isAnagram = function(s, t) {
     if(s.length!=t.length)return false;
     
     var map1 = new Map();
     var map2 = new Map();
 ​
     for(var ch of s){
         if(!map1.has(ch))map1.set(ch, 1);
         else map1.set(ch, map1.get(ch)+1);
     }
     
     for(var ch of t){
         if(!map2.has(ch))map2.set(ch, 1);
         else map2.set(ch, 1+map2.get(ch));
     }
     
     for(var key of map1.keys()){
         if(!map2.has(key))return false;
         if(map1.get(key)!=map2.get(key))return false;
     }
     
     return true;
 };
 ​
```
