/*
 * @lc app=leetcode.cn id=128 lang=typescript
 *
 * [128] 最长连续序列
 */

// @lc code=start
// 需要用到set去重
// 突然看到这个问题，没什么好的思路
// 本能的会想到暴力法
// 看到题解，确实很巧妙
// 和567字符串的排列很像
function longestConsecutive(nums: number[]): number {
  const set = new Set(nums);

  let longestStreak = 0;
  let currentStreak = 0;
  for (let num of set) {
    // 优化一下，如果存在num-1,那么还不是初始值，先不进入内存循环
    if (set.has(num - 1)) continue;

    // 开始寻找是否存在num+1
    currentStreak = 1;
    while (set.has(++num)) {
      currentStreak++;
    }

    // 更新最大长度
    longestStreak = Math.max(longestStreak, currentStreak);
  }

  return longestStreak;
}
// @lc code=end
