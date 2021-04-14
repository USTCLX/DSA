/*
 * @lc app=leetcode.cn id=239 lang=typescript
 *
 * [239] 滑动窗口最大值
 */

// 难点是window记录的是 i
// 并且理清i和k和winow的关系
// 需要再做一遍
// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  if (nums.length <= k) {
    let max = -Infinity;
    for (let i = 0; i < nums.length; i++) {
      max = Math.max(max, nums[i]);
    }
    return [max];
  }

  // 初始化
  const result = [];
  const window = []; // 存储下标

  for (let i = 0; i < nums.length; i++) {
    // 窗口是否移动到了边界，从k开始。删除头元素
    if (i - k >= window[0] && i >= k) {
      window.shift();
    }

    while (window.length && nums[window[window.length - 1]] <= nums[i]) {
      window.pop();
    }
    window.push(i);

    if (i >= k - 1) {
      result.push(nums[window[0]]);
    }
  }
  return result;
}
// @lc code=end
