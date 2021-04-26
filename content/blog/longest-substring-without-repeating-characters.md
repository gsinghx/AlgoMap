---
title: Longest Substring Without Repeating Characters
slug: /longest-substring-without-repeating-characters
date: "2020-06-16T22:12:03.284Z"
tags: ["Map", "Two Pointers", "Sliding Window", "String"]
description: 2 Sum

status: doing
---

Given a string s, find the length of the longest substring without repeating characters.

Example 1:

Input: s = "abcabcbb"
Output: 3
Explanation: The answer is "abc", with the length of 3.
Example 2:

Input: s = "bbbbb"
Output: 1
Explanation: The answer is "b", with the length of 1.
Example 3:

Input: s = "pwwkew"
Output: 3
Explanation: The answer is "wke", with the length of 3.
Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
Example 4:

Input: s = ""
Output: 0

```javascript
var lengthOfLongestSubstring = function (s) {
  var left = 0
  var ans = 0
  var map = new Map()

  for (var right = 0; right < s.length; right++) {
    var ch = s[right]

    if (!map.has(ch)) map.set(ch, 0)
    map.set(ch, map.get(ch) + 1)

    while (map.get(ch) > 1) {
      map.set(s[left], map.get(s[left]) - 1)

      left++
    }

    ans = Math.max(ans, right - left + 1)
  }

  return ans
}
```
