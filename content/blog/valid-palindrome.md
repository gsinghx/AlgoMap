---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Valid Palindrome
Given a string s, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.



Example 1:

Example 2:



Constraints:

```
 Input: s = "A man, a plan, a canal: Panama"
Output: true
Explanation: "amanaplanacanalpanama" is a palindrome.

```

```
Input: s = "race a car"
Output: false
Explanation: "raceacar" is not a palindrome.

```

"Two Pointers","String"

```javascript
/**
  * @param {string} s
  * @return {boolean}
  */
 var isPalindrome = function(s) {
     var left = 0;
     var right = s.length-1;
     s = s.toLowerCase();
     
     while(left<right){
         if(!isChar(s[left])){
             left++;
         }else if(!isChar(s[right])){
             right--;
         }else if(s[left]!=s[right]){
             return false;
         }else{
             left++;right--;
         }
     }
     
     return true;
 };
 var isChar = function(ch){
     var code = ch.charCodeAt(0);
     
     if((code>=65 && code<65+26) ||
        (code>=97 && code<97+26) ||
        (code>=48 && code<48+10))return true;
     return false;
 }
 ​
```
