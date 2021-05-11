/*
 * @lc app=leetcode.cn id=31 lang=typescript
 *
 * [31] 下一个排列
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function swap(nums: number[], a: number, b: number) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

function reverse(nums: number[], l: number, r: number) {
  while (l < r) {
    swap(nums, l++, r--);
  }
}

function nextPermutation(nums: number[]): void {
  if (!nums || !nums.length) return;

  let p1 = nums.length - 2;
  while (p1 >= 0 && nums[p1] > nums[p1 + 1]) {
    p1--;
  }

  if (p1 >= 0) {
    let p2 = nums.length - 1;
    while (p2 >= 0 && nums[p1] >= nums[p2]) {
      p2--;
    }
    swap(nums, p1, p2);
  }

  reverse(nums, p1 + 1, nums.length - 1);
}
// @lc code=end

export { nextPermutation };
