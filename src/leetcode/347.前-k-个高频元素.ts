/*
 * @lc app=leetcode.cn id=347 lang=typescript
 *
 * [347] 前 K 个高频元素
 */

// @lc code=start

function swap(nums: number[], a: number, b: number) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

// 小顶堆
class MinHeap {
  private nums: number[] = [0];
  private size: number = 0;

  // 把元素放到末尾，然后向上维护
  push(num: number) {
    this.nums.push(num);

    let cur = this.nums.length - 1;
    let parent = cur >>> 1;

    while (this.nums[parent] > this.nums[cur]) {
      swap(this.nums, parent, cur);
      cur = parent;
      parent = parent >>> 1;
    }

    this.size++;
  }

  // 把头元素取出，然后把最后一个元素换上，然后向下维护
  pop(): number {
    if (this.nums.length === 1) {
      return null;
    }
    const length = this.nums.length;
    const head = this.nums[1];
    const tail = this.nums[this.nums.length - 1];

    // 删除末尾元素
    this.nums.splice(length - 1, 1);

    // 替换到头部
    this.nums[1] = tail;

    // 向下维护
    let current = 1;
    while (current * 2 < length) {
      let lchild = 2 * current;
      let rchild = 2 * current + 1;

      if (
        this.nums[current] <= this.nums[lchild] &&
        this.nums[current] <= this.nums[rchild]
      ) {
        // 当前元素比左右孩子都小
        break;
      } else if (this.nums[lchild] < this.nums[rchild]) {
        // 左孩子更小，和左孩子互换
        swap(this.nums, current, lchild);
        current = lchild;
      } else {
        // 右孩子更小，和右孩子互换
        swap(this.nums, current, rchild);
        current = rchild;
      }
    }

    this.size--;

    return head;
  }

  getMin() {
    return this.nums[1];
  }

  getSize() {
    return this.size;
  }

  getValue() {
    return this.nums.slice(1);
  }
}

// 使用
function topKFrequent(nums: number[], k: number): number[] {
  // 统计每个数字出现的次数
  const map: Map<number, number> = new Map();
  for (let num of nums) {
    if (!map.has(num)) {
      map.set(num, 1);
    } else {
      map.set(num, map.get(num) + 1);
    }
  }

  const heap = new MinHeap();
  // 遍历map
  for (let cnt of map.values()) {
    if (heap.getSize() < k) {
      heap.push(cnt);
    } else {
      const min = heap.getMin();
      if (min < cnt) {
        heap.pop();
        heap.push(cnt);
      }
    }
  }

  // 反转map
  const map2 = new Map();
  for (let [num, cnt] of map) {
    map2.set(cnt, num);
  }

  const ans = [];

  for (let cnt of heap.getValue()) {
    ans.push(map2.get(cnt));
  }

  return ans;
}
// @lc code=end

export { topKFrequent };
