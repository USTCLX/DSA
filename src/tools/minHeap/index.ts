class MinHeap {
  heap: number[] = [];

  constructor(nums: number[] = []) {
    this.heapify(nums);
  }

  swap(indexA: number, indexB: number) {
    const temp = this.heap[indexA];
    this.heap[indexA] = this.heap[indexB];
    this.heap[indexB] = temp;
  }

  size() {
    return this.heap.length;
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  // 获取左孩子的索引
  getLeftChildIndex(index: number) {
    return 2 * index + 1;
  }

  // 获取右孩子的索引
  getRightChildIndex(index: number) {
    return 2 * index + 2;
  }

  // 获取父亲节点的索引
  getParentIndex(index: number) {
    if (index === 0) return null;
    return (index - 1) >>> 1;
  }

  // 初始化建堆
  heapify(nums: number[]) {
    this.heap = nums;
    // 完全二叉树的叶子节点的个数是总节点个数的一半。
    // 叶子节点本身不需要堆化。只需要等待后面的节点堆化。
    for (let i = this.heap.length >>> 1; i >= 0; i--) {
      this.heapifyDown(i);
    }
  }

  // 向上维护堆
  heapifyUp(index: number) {
    let currentIndex = index;
    let parentIndex = this.getParentIndex(currentIndex);
    while (index && this.heap[currentIndex] < this.heap[parentIndex]) {
      this.swap(parentIndex, currentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(parentIndex);
    }
  }

  // 向下维护堆
  heapifyDown(index: number) {
    let currentIndex = index;
    let lChildIndex = this.getLeftChildIndex(currentIndex);
    let rChildIndex = this.getRightChildIndex(currentIndex);

    const size = this.size();

    // 如果当前值大于左孩子
    if (
      lChildIndex < size &&
      this.heap[currentIndex] > this.heap[lChildIndex]
    ) {
      currentIndex = lChildIndex;
    }

    // 如果当前值大于右孩子
    if (
      rChildIndex < size &&
      this.heap[currentIndex] > this.heap[rChildIndex]
    ) {
      currentIndex = rChildIndex;
    }

    // 如果当前索引被替换
    if (currentIndex !== index) {
      this.swap(currentIndex, index);
      this.heapifyDown(currentIndex);
    }
  }

  // 插入元素
  insert(value: number): boolean {
    if (value != null) {
      this.heap.push(value);
      this.heapifyUp(this.heap.length - 1);
      return true;
    }
    return false;
  }

  // 删除堆顶元素
  extract(): number {
    if (this.isEmpty()) return null;

    if (this.size() === 1) return this.heap.shift();

    // 交换尾首
    this.swap(0, this.heap.length - 1);
    // 剔除最小元素
    const min = this.heap.pop();
    // 重新堆化
    this.heapifyDown(0);

    return min;
  }

  // 获取堆定元素
  findMinmum(): number {
    return this.isEmpty() ? null : this.heap[0];
  }
}

export { MinHeap };
