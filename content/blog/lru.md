---
title: LRU Cache
date: "2021-03-19T22:12:03.284Z"
tags: ["Cache", "LinkedList", "Map"]
description: LRU Cache

status: done
---

> Follow up to this question, LFU cache is covered [Here](/lfu)

What's an LRU Cache:

- A system to maintain a cache with in a limited amount of memory.
- If the memory is limited, obviously we'll reach a point where there is no space left to store the cache item.
- So the least recently used (LRU) item is removed from the cache when the cache is full.
- We maintain the position of the cache item which was used the earliest and remove it.
- This position of each item can be implemented using [Linked Lists](/ll).
- Valid operations on a cache system:
  1. get(key)
  2. put(key, value)

## Example:

```
Cache Capacity: 2
put(1,1)  //Cache: {1:1}
put(2,2)  // Cache: {1:1, 2:2}
get(1)    // Cache: {1:1, 2:2}, Output: 1
put(3,3)  // Cache: {1:1, 3:3}, Key 2 removed from the cache
get(2)    // Cache: {1:1, 3:3}, Output: -1
```

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

## Execution:

```javascript
var lru = new LRUCache(2)
lru.put(1, 1)
lru.put(2, 2)
lru.get(1)
lru.put(3, 3)
lru.get(2)
```
