/*
 * @lc app=leetcode.cn id=53 lang=typescript
 *
 * [53] 最大子序和
 */

// @lc code=start

// 暴力方法
// 遍历数组，并依次相加所有的值，并更新最大值
// function maxSubArray(nums: number[]): number {
//   let res = -Infinity;

//   for (let i = 0; i < nums.length; i++) {
//     let cur = 0;
//     for (let j = i; j < nums.length; j++) {
//       cur += nums[j];
//       if (cur > res) {
//         res = cur;
//       }
//     }
//   }
//   return res;
// }

// 需要优化哦
// 如何优化呢？
// 使用dp来优化，其实一开始也想到了dp，但是没有想到状态方程
// dp[i] 代表以nums[i] 为结尾的最大子序列的和
// dp[i] = max(dp[i-1]+nums[i],nums[i])
// 也就是说，如果dp[i-1]为负数，则对目前的结果只有负增益，可以不用管了

// function maxSubArray(nums: number[]): number {
//   if (!nums.length) return 0;

//   const dp = [nums[0]];
//   let ans = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
//     ans = Math.max(dp[i], ans);
//   }
//   return ans;
// }

// 复习一遍
// dp[i] = max(dp[i-1]+nums[i],nums[i]);
function maxSubArray(nums: number[]): number {
  if (!nums.length) return -Infinity;
  const dp = [];
  dp[0] = nums[0];
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    max = Math.max(dp[i], max);
  }
  return max;
}
// @lc code=end
