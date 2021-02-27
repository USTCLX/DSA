/*
 * @lc app=leetcode.cn id=295 lang=typescript
 *
 * [295] 数据流的中位数
 */

// @lc code=start
// 在插入的过程中始终保持有序
class MedianFinder {
  nums: number[] = [];

  // 利用插入排序
  addNum(num: number): void {
    let j = this.nums.length - 1;

    for (; j >= 0; j--) {
      if (this.nums[j] > num) {
        this.nums[j + 1] = this.nums[j];
      } else {
        break;
      }
    }

    this.nums[j + 1] = num;
  }

  findMedian(): number {
    const even = this.nums.length % 2 === 0;
    const mid = this.nums.length >>> 1;

    let ans;
    if (even) {
      ans = (this.nums[mid] + this.nums[mid - 1]) / 2;
    } else {
      ans = this.nums[mid];
    }

    return ans;
  }
}

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
// @lc code=end
