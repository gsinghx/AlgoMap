---
title: Valid Parentheses
slug: /valid-parentheses
date: "2020-06-16T22:12:03.284Z"
tags: ["String", "Stack"]
description: 2 Sum

status: todo
---

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
Example 4:

Input: s = "([)]"
Output: false
Example 5:

Input: s = "{[]}"
Output: true

```javascript
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  var map = {
    "(": ")",
    "{": "}",
    "[": "]",
  }

  var stack = []
  for (var ch of s) {
    if (map[ch] != undefined) {
      stack.push(ch)
    } else if (map[stack.pop()] != ch) {
      return false
    }
  }

  return stack.length == 0
}
```
