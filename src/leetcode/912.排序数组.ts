/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
// 插入排序来一个
function sortArray(nums: number[]): number[] {
  if (!nums.length) return nums;

  for (let i = 1; i < nums.length; i++) {
    const cur = nums[i];

    let j = i - 1;
    for (; j >= 0; j--) {
      if (nums[j] > cur) {
        nums[j + 1] = nums[j];
      } else {
        break;
      }
    }

    nums[j + 1] = cur;
  }

  return nums;
}
// @lc code=end
