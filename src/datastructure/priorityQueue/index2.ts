import swap from "../../tools/swap";
// 再次实现一个优先队列
// 通过代码体验一下大顶堆的实现

class maxHeap {
  size: number;
  nums: number[];
  constructor() {
    this.size = 0;
    this.nums = [null];
  }

  add(n: number) {
    this.size++;
    this.nums.push(n);
    this.swim(this.size);
  }

  // 根据当前的索引值，来更新堆
  // 如果当前索引上的元素值大于父元素，则调换他们的位置
  // 父元素的索引为你 index / 2
  swim(index: number) {
    while (index > 1) {
      let parent = index >> 1;
      if (this.nums[parent] < this.nums[index]) {
        swap(this.nums, parent, index);
        index = parent;
      }
    }
  }
}
