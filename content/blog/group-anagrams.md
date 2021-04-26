---
title: Group Anagrams
slug: /group-anagrams
date: "2020-06-16T22:12:03.284Z"
tags: ["Map", "String"]
description: 2 Sum

status: todo
---

Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]

```javascript
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  var map = {}

  for (var str of strs) {
    var sorted = str.split("").sort().join("")

    if (map[sorted] == undefined) map[sorted] = []
    map[sorted].push(str)
  }

  return Object.values(map)
}
```
