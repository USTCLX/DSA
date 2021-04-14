/*
 * @lc app=leetcode.cn id=295 lang=typescript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
abstract class Heap<T> {
  protected heap: T[] = [];
  protected getNumberForCompare: (val: T) => number;

  protected abstract compare(indexA: number, indexB: number): boolean;

  constructor(getNumberForCompare: (val: T) => number, values: T[] = []) {
    this.getNumberForCompare = getNumberForCompare;
    this.heapify(values);
  }

  // 交换堆内元素
  protected swap(indexA: number, indexB: number) {
    const temp = this.heap[indexA];
    this.heap[indexA] = this.heap[indexB];
    this.heap[indexB] = temp;
  }

  // 获取左孩子的索引
  protected getLeftChildIndex(index: number) {
    return 2 * index + 1;
  }

  // 获取右孩子的索引
  protected getRightChildIndex(index: number) {
    return 2 * index + 2;
  }

  // 获取父亲节点的索引
  protected getParentIndex(index: number) {
    if (index === 0) return null;
    return (index - 1) >>> 1;
  }

  // 初始化建堆
  protected heapify(values: T[]) {
    this.heap = values;
    // 完全二叉树的叶子节点的个数是总节点个数的一半。
    // 叶子节点本身不需要堆化。只需要等待后面的节点堆化。
    for (let i = this.heap.length >>> 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  // 向上维护堆
  protected heapifyUp(index: number) {
    let currentIndex = index;
    let parentIndex = this.getParentIndex(currentIndex);
    while (parentIndex >= 0 && this.compare(currentIndex, parentIndex)) {
      this.swap(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(parentIndex);
    }
  }

  // 向下维护堆
  protected heapifyDown(index: number) {
    let currentIndex = index;
    let lChildIndex = this.getLeftChildIndex(currentIndex);
    let rChildIndex = this.getRightChildIndex(currentIndex);

    const size = this.size();

    // 如果当前值大于左孩子
    if (lChildIndex < size && this.compare(lChildIndex, currentIndex)) {
      currentIndex = lChildIndex;
    }

    // 如果当前值大于右孩子
    if (rChildIndex < size && this.compare(rChildIndex, currentIndex)) {
      currentIndex = rChildIndex;
    }

    // 如果当前索引被替换
    if (currentIndex !== index) {
      this.swap(currentIndex, index);
      this.heapifyDown(currentIndex);
    }
  }

  // 获取堆的大小
  size() {
    return this.heap.length;
  }

  // 判断堆是否为空
  isEmpty() {
    return this.heap.length === 0;
  }

  // 插入元素
  insert(value: T): boolean {
    if (value != null) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
      return true;
    }
    return false;
  }

  // 删除堆顶元素
  extract(): T {
    if (this.isEmpty()) return null;

    if (this.size() === 1) return this.heap.shift();

    // 交换堆顶和堆尾元素
    this.swap(0, this.heap.length - 1);
    // 剔除最小元素
    const top = this.heap.pop();
    // 重新堆化
    this.heapifyDown(0);

    return top;
  }

  // 获取堆顶元素
  top(): T {
    return this.isEmpty() ? null : this.heap[0];
  }

  // 获取堆内元素
  values(): T[] {
    return [...this.heap];
  }
}

// 小顶堆
class MinHeap<T> extends Heap<T> {
  protected compare(indexA: number, indexB: number): boolean {
    return (
      this.getNumberForCompare(this.heap[indexA]) <
      this.getNumberForCompare(this.heap[indexB])
    );
  }
}

// 大顶堆
class MaxHeap<T> extends Heap<T> {
  protected compare(indexA: number, indexB: number): boolean {
    return (
      this.getNumberForCompare(this.heap[indexA]) >
      this.getNumberForCompare(this.heap[indexB])
    );
  }
}

class MedianFinder {
  minHeap = new MinHeap<number>(val => val);
  maxHeap = new MaxHeap<number>(val => val);
  constructor() {}

  addNum(num: number): void {
    if (this.minHeap.size() === this.maxHeap.size()) {
      // 大顶堆和小顶堆size相等，数据需要加入小顶堆。
      // 先把数据加入大顶堆，再从大顶堆中取出最大者加入小顶堆
      this.maxHeap.insert(num);
      this.minHeap.insert(this.maxHeap.extract());
    } else {
      // 小顶堆的size比大顶堆大1，数据需要加入大顶堆
      // 先把数据加入小顶堆，然后从小顶堆取出最小者加入大顶堆
      this.minHeap.insert(num);
      this.maxHeap.insert(this.minHeap.extract());
    }
  }

  findMedian(): number {
    if (this.minHeap.size() === this.maxHeap.size()) {
      // size相等，中位数为偶数
      return (this.minHeap.top() + this.maxHeap.top()) / 2;
    } else {
      // min size 比 max size大1，直接返回min 的top
      return this.minHeap.top();
    }
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end

export { MedianFinder };
