//703. 数据流中的第K大元素
/**
设计一个找到数据流中第K大元素的类（class）。注意是排序后的第K大元素，不是第K个不同的元素。

你的 KthLargest 类需要一个同时接收整数 k 和整数数组nums 的构造器，它包含数据流中的初始元素。每次调用 KthLargest.add，返回当前数据流中第K大的元素。

示例:

int k = 3;
int[] arr = [4,5,8,2];
KthLargest kthLargest = new KthLargest(3, arr);
kthLargest.add(3);   // returns 4
kthLargest.add(5);   // returns 5
kthLargest.add(10);  // returns 5
kthLargest.add(9);   // returns 8
kthLargest.add(4);   // returns 8
说明
 */

//  方法：维护一个最小堆，堆顶元素就是第k大的元素，如果当前add的val比堆顶元素大，那么就要将堆顶元素替换成当前元素，并且通过sink来重新维护堆。

var KthLargest = function(k: number, nums: Array<number>) {
  this.k = k;
  this.size = 0;
  this.heap = [null];
  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i]);
  }
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val: number) {
  if (this.size < this.k) {
    // heap is not full
    this.heap.push(val);
    this.size++;
    this.swim(this.size);
  } else {
    // heap is full
    if (this.heap[1] >= val) {
      return this.heap[1];
    } else {
      this.heap[1] = val;
      this.sink(1);
    }
  }
  return this.heap[1];
};

KthLargest.prototype.swim = function(i: number) {
  while (i > 1) {
    let parent = i >> 1;
    if (this.heap[i] < this.heap[parent]) {
      let temp = this.heap[i];
      this.heap[i] = this.heap[parent];
      this.heap[parent] = temp;
      i = parent;
    } else {
      break;
    }
  }
};

KthLargest.prototype.sink = function(i: number) {
  while (2 * i <= this.size) {
    let j = 2 * i;
    if (this.heap[j] > this.heap[j + 1]) j++;
    if (this.heap[j] < this.heap[i]) {
      let temp = this.heap[i];
      this.heap[i] = this.heap[j];
      this.heap[j] = temp;
      i = j;
    } else {
      break;
    }
  }
};

export default KthLargest;
