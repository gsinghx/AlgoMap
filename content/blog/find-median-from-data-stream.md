---
title: 2 Sum
date: "2020-06-16T22:12:03.284Z"
tags: []
description: 2 Sum

status: todo
---

Find Median from Data Stream
The median is the middle value in an ordered integer list. If the size of the list is even, there is no middle value and the median is the mean of the two middle values.

Implement the MedianFinder class:



Example 1:



Constraints:



Follow up:

```
 Input
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
Output
[null, null, null, 1.5, null, 2.0]

Explanation
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // return 1.5 (i.e., (1 + 2) / 2)
medianFinder.addNum(3);    // arr[1, 2, 3]
medianFinder.findMedian(); // return 2.0

```

"Heap","Design"

```javascript

     }
     
     if(largest!=i){
         [this.low[i], this.low[largest]] = [this.low[largest], this.low[i]];
     
         this.heapifyLow(largest);
     }
 }
 MedianFinder.prototype.heapifyHigh = function(i){
     for(var i=parseInt(this.high.length/2)-1; i>=0; i--){
         this.heapifyHighHelper(i);
     }
 }
 ​
 MedianFinder.prototype.heapifyHighHelper = function(i){
     var largest = i;
     var left = 2*i+1;
     var right = 2*i+2;
     var size = this.high.length;
     
     if(left<size && this.high[left]<this.high[largest]){
         largest = left;
     }
     if(right<size && this.high[right]<this.high[largest]){
         largest = right;
     }
     
     if(largest!=i){
         [this.high[i], this.high[largest]] = [this.high[largest], this.high[i]];
     
         this.heapifyHigh(largest);
     }
 }
 /**
  * @param {number} num
  * @return {void}
  */
 MedianFinder.prototype.addNum = function(num) {
     this.low.push(num);
     this.heapifyLow(0);
     
     this.high.push(this.low.shift());
     this.heapifyHigh(0);
     
     if(this.high.length>this.low.length){
         this.low.push(this.high.shift());
         
         this.heapifyHigh(0);
     }
     this.heapifyLow(0);
   // console.log(this.low, this.high)
   //   console.log("#")
 };
 ​
 /**
  * @return {number}
  */
 MedianFinder.prototype.findMedian = function() {
     if((this.low.length+this.high.length)%2==0){
         return (this.low[0]+this.high[0])/2;
     }else{
         return this.low[0];
     }
 };
 ​
 /**
  * Your MedianFinder object will be instantiated and called as such:
  * var obj = new MedianFinder()
  * obj.addNum(num)
  * var param_2 = obj.findMedian()
  */
 ​
```
