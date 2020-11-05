/*
 * @lc app=leetcode.cn id=146 lang=typescript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
class LRUCache {
  cache: number[][];
  capacity: number;
  constructor(capacity: number) {
    this.cache = [];
    this.capacity = capacity;
  }

  // 这里不能直接换位，而应该是取出来，放到第一个
  // private swap(a: number, b: number): void {
  //   if (a === b) return;
  //   const temp = this.cache[a];
  //   this.cache[a] = this.cache[b];
  //   this.cache[b] = temp;
  // }

  // 将第i个元素移动到首位
  private move(i: number): void {
    if (i === 0) return;

    // 取出来
    const temp = this.cache.splice(i, 1)[0];

    // 加入头部
    this.cache.unshift(temp);
  }

  get(key: number): number {
    let ans = -1;
    const l = this.cache.length;

    for (let i = 0; i < l; i++) {
      if (this.cache[i][0] == key) {
        ans = this.cache[i][1];
        // swap
        this.move(i);
        break;
      }
    }

    return ans;
  }

  put(key: number, value: number): void {
    const l = this.cache.length;
    for (let i = 0; i < l; i++) {
      if (this.cache[i][0] === key) {
        this.cache[i][1] = value;
        // swap
        this.move(i);
        return;
      }
    }

    if (l === this.capacity) {
      // remove tail
      this.cache.pop();
    }
    this.cache.unshift([key, value]);
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

export { LRUCache };
