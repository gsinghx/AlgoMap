---
title: Longest Palindromic Substring
slug: /longest-palindromic-substring
date: "2020-06-16T22:12:03.284Z"
tags: ["String", "Dynamic Programming"]
description: 2 Sum

status: todo
---

Given a string s, return the longest palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Note: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
Example 3:

Input: s = "a"
Output: "a"
Example 4:

Input: s = "ac"
Output: "a"

```javascript
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  var ans = ""

  for (var i = 0; i < s.length; i++) {
    var odd = expand(i, i, s)
    var even = expand(i, i + 1, s)

    if (Math.max(odd.length, even.length) > ans.length) {
      if (odd.length > even.length) ans = odd
      else ans = even
    }
  }

  return ans
}
var expand = function (i, j, s) {
  while (i >= 0 && j < s.length && s[i] == s[j]) {
    i--
    j++
  }
  return s.substr(i + 1, j - i - 1)
}
```
