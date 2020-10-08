/*
 * @lc app=leetcode.cn id=300 lang=typescript
 *
 * [300] 最长上升子序列
 */

// @lc code=start
/**
 * 动态规划解法
 * dp[i] 代表从0～i个元素中，最长上升子序列（包含第i个元素）
 * dp[i] = max(dp[j]) + 1; j=0~i-1 && nums[i]>nums[j]
 * @param nums
 */
// function lengthOfLIS(nums: number[]): number {
//   if (nums.length === 0) return 0;

//   const dp = Array(nums.length).fill(1);

//   for (let i = 1; i < nums.length; i++) {
//     // 第一层循环
//     let max = 0;
//     for (let j = 0; j < i; j++) {
//       // 第二层循环
//       if (dp[j] > max && nums[i] > nums[j]) {
//         max = dp[j];
//       }
//     }
//     dp[i] = max + 1;
//   }

//   return dp.reduce((a, b) => {
//     return a > b ? a : b;
//   });
// }

// 优化一版本
function lengthOfLIS(nums: number[]): number {
  if (nums.length === 0) return 0;

  const dp = Array(nums.length).fill(1);
  let result = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        // 这里在每次循环中，更新dp[i]
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    // 这里就将结果记录下来
    result = Math.max(result, dp[i]);
  }
  return result;
}
// @lc code=end
