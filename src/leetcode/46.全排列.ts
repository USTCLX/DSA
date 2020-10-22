/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start

function swap(nums: number[], a: number, b: number) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

function permuteHelper(nums: number[], current: number, result: number[][]) {
  if (current === nums.length - 1) {
    result.push([...nums]);
    return;
  }
  for (let i = current; i < nums.length; i++) {
    swap(nums, i, current);
    permuteHelper(nums, current + 1, result);
    swap(nums, i, current);
  }
}

function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  permuteHelper(nums, 0, result);
  return result;
}
// @lc code=end
