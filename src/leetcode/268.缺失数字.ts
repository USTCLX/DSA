/*
 * @lc app=leetcode.cn id=268 lang=typescript
 *
 * [268] 缺失数字
 */

// @lc code=start
// 简单的方法，将0-n求和，然后减去数组的和。就是缺失的那一个数字
// function missingNumber(nums: number[]): number {
//   const n = nums.length;
//   const total = ((1 + n) * n) / 2;

//   let curTotal = 0;
//   for (let i = 0; i < nums.length; i++) {
//     curTotal += nums[i];
//   }
//   return total - curTotal;
// }

// 求和方法的改进版本
function missingNumber(nums: number[]): number {
  let sum = 0;
  for (let i = 0; i <= nums.length; i++) {
    sum += i;
    sum -= nums[i] || 0;
  }
  return sum;
}

// 先排序
// function missingNumber(nums: number[]): number {
//   nums.sort((a, b) => a - b);

//   for (let i = 0; i <= nums.length; i++) {
//     if (nums[i] !== i) {
//       return i;
//     }
//   }
//   return -1;
// }

// 利用hash表来查询
// function missingNumber(nums: number[]): number {
//   const set = new Set(nums);

//   for (let i = 0; i <= nums.length; i++) {
//     if (!set.has(i)) {
//       return i;
//     }
//   }
//   return -1;
// }
// @lc code=end
