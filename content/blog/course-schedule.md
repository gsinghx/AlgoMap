---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Course Schedule
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

Return true if you can finish all courses. Otherwise, return false.

Example 1:

Example 2:

Constraints:

```
 Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0. So it is possible.

```

```
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.

```

"Depth-first Search","Breadth-first Search","Graph","Topological Sort"

```javascript
/**
  * @param {number} numCourses
  * @param {number[][]} prerequisites
  * @return {boolean}
  */
 var canFinish = function(numCourses, prerequisites) {
     var graph = new Map();
     
     for(var pre of prerequisites){
         if(!graph.has(pre[0]))graph.set(pre[0], []);
         graph.get(pre[0]).push(pre[1]);
     }
     var visited = new Map();
     var visiting = new Map();
     
     for(var key of graph.keys()){
         if(hasCycle(graph, key, visiting, visited)){
             return false;
         }
     }
     
     return true;
 };
 var hasCycle = function(graph, key, visiting, visited){
     if(visited.has(key))return false;
     if(visiting.has(key) && visiting.get(key))return true;
     visiting.set(key, true);
     
     var neigh = graph.get(key);
     if(neigh!=undefined){
         for(var n of neigh){
             if(hasCycle(graph, n, visiting, visited)){
                 return true;
             }
         }
     }
     
     visited.set(key, true);
     visiting.set(key, false);
     return false;
 }
 ​
```
