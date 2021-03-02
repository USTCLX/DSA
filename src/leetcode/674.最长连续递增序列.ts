/*
 * @lc app=leetcode.cn id=674 lang=typescript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
function findLengthOfLCIS(nums: number[]): number {
  if (!nums.length) return 0;

  let pre = 0;
  let cur = 0;
  let max = 1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      cur = i;
    } else {
      pre = i;
    }
    max = Math.max(max, cur - pre + 1);
  }

  return max;
}
// @lc code=end
