---
title: LRU Cache
slug: /lru
date: "2020-06-16T22:12:03.284Z"
tags: ["Cache"]
description: LRU Cache

status: doing
---

LFU cache covered [Here](/lfu)

What's an LRU Cache:

- Least Recently Used item is removed from the cache when the cache is full.
- We somehow maintain the position of the cache item which was used the earliest and remove it.
- Can be implemented using [Linked Lists](/ll).

## Implementation

Here we will maintain an array _history_ in which the items will be sorted according to their most recent occurence.
