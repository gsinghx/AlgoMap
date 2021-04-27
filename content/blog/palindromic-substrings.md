---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Palindromic Substrings
Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:



Example 2:



Note:



```
 Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".

```

```
Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".

```

"String","Dynamic Programming"

```javascript
/**
  * @param {string} s
  * @return {number}
  */
 var countSubstrings = function(s){
     var count = 0;
     
     function expand(left, right){
         while(left>=0 && right<s.length && s[left]==s[right]){
             count++;
             left--;
             right++;
         }
     }
     
     for(var i=0; i<s.length; i++){
         
         expand(i,i);
         expand(i, i+1);
        // var next = i + 1;
        //  expand(i - 1, next);
        //  expand(i, next);
     }
     
     return count ;
 }
 ​
 //TLE:
 var countSubstrings1 = function(s) {
     var out = 0;
     var mem = new Array(s.length).fill(0).map(e=>new Array(s.length).fill(0));
     
     var map = {};
     function isPalindrome(str){
         if(map[str]!=undefined) return map[str];
         var start = 0;
         var end = str.length-1;
         while(start<end){
             if(str[start]!=str[end]){
                 map[str] = false;
                 return false;
             }
             start++;end--;
         }
         map[str] = true;
         return true;
     }
     
     
     function help(start, end){
         if(end==s.length){
             
             return;
         }
         
         if(mem[start][end]==1){
             return;
         }
         
         mem[start][end]=1;
         if(isPalindrome(s.substr(start, end-start+1))){
             out++;
             
 ​
```
