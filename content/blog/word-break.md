---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Word Break
Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.



Example 1:

Example 2:

Example 3:



Constraints:

```
 Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".

```

```
Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.

```

```
Input: s = "catsandog", wordDict = ["cats","dog","sand","and","cat"]
Output: false

```

"Dynamic Programming"

```javascript
/**
  * @param {string} s
  * @param {string[]} wordDict
  * @return {boolean}
  */
 var wordBreak = function(s, wordDict) {
     var map = new Map();
     
     function help(str){
         if(str.length==0)return true;
         
         if(map.has(str))return map.get(str);
         
         for(var word of wordDict){
             if(str.indexOf(word)==0){
                 if(help(str.substr(word.length))){
                     map.set(str, true);
                     return true;
                 }
             }
         }
         map.set(str, false);
         return false;
     }
     return help(s);
 };
 ​
```
