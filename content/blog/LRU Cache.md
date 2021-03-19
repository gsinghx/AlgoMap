---
title: LRU Cache
slug: /lru
date: "2021-03-19T22:12:03.284Z"
tags: ["Cache"]
description: LRU Cache

status: done
---

LFU cache covered [Here](/lfu)

What's an LRU Cache:

- Least Recently Used item is removed from the cache when the cache is full.
- We somehow maintain the position of the cache item which was used the earliest and remove it.
- Can be implemented using [Linked Lists](/ll).

## Implementation

Here we will maintain an array _history_ in which the items will be sorted according to their most recent occurrence.

```javascript
var LRUCache = function (capacity) {
  this.size = capacity
  this.cache = new Map()
  this.history = []
}
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1
  }
  this.updateHistory(key)
  return this.cache.get(key)
}
LRUCache.prototype.put = function (key, value) {
  if (this.cache.has(key)) {
    this.updateHistory(key)
    this.cache.set(key, value)
  } else {
    if (this.cache.size() >= this.capacity) {
      var keyToRemove = this.history.shift()
      this.cache.delete(keyToRemove)
      this.updateHis
    }
    this.updateHistory(key)
    this.cache.set(key, value)
  }
}
LRUCache.prototype.updateHistory = function (key) {
  var index = this.history.indexOf(key)
  if (index != -1) {
    this.history.splice(index, 1)
  }
  this.history.push(key)
}
```
