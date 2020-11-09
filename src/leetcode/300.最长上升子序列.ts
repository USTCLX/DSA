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
// function lengthOfLIS(nums: number[]): number {
//   if (nums.length === 0) return 0;

//   const dp = Array(nums.length).fill(1);
//   let result = 1;

//   for (let i = 1; i < nums.length; i++) {
//     for (let j = 0; j < i; j++) {
//       if (nums[i] > nums[j]) {
//         // 这里在每次循环中，更新dp[i]
//         dp[i] = Math.max(dp[i], dp[j] + 1);
//       }
//     }
//     // 这里就将结果记录下来
//     result = Math.max(result, dp[i]);
//   }
//   return result;
// }

// 暴力法
// 两层循环
// 这个暴力法是行不通的，比如：
// [10,9,2,5,3,4]
// 正确答案是2，3，4，通过下面的算法得到的是2，5
// ❌
// function lengthOfLIS(nums: number[]): number {
//   if (!nums || !nums.length) return 0;

//   let max = 1;
//   let count = 1;
//   let preVal = null;
//   for (let i = 0; i < nums.length; i++) {
//     preVal = nums[i];
//     count = 1;
//     for (let j = i + 1; j < nums.length; j++) {
//       if (nums[j] > preVal) {
//         count++;
//         preVal = nums[j];
//         max = Math.max(max, count);
//       }
//     }
//   }
//   return max;
// }

// 这个问题，通用的解决方案就是动态规划
// d[i] 代表以第i个元素为结尾的最长上升子序列的数量
/**
 * d[i] =
 * for(j from 0 to i-1){
 *  max()
 *  if(nums[i] > nums[j]){
 *    dp[j]+1
 *  }else{
 *    1
 *  }
 * }
 *
 */

function lengthOfLIS(nums: number[]): number {
  if (!nums || !nums.length) return 0;
  const dp = Array(nums.length).fill(1);

  for (let i = 1; i < nums.length; i++) {
    let max = 0;
    for (let j = 0; j < i; j++) {
      // 只有当前的数字大于j位置的数字
      // 并且j位置的最长上升子序列的长度大于当前的长度，才更新max
      if (nums[i] > nums[j] && dp[j] > max) {
        max = dp[j];
      }
    }
    dp[i] = max + 1;
  }

  // dp[i] 中的最大值
  return dp.reduce((a, b) => (a > b ? a : b));
}
// @lc code=end
