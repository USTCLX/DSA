/*
 * @lc app=leetcode.cn id=611 lang=typescript
 *
 * [611] 有效三角形的个数
 */

// @lc code=start
function triangleNumber(nums: number[]): number {
  nums.sort((a, b) => a - b);

  let res = 0;
  let left = 0;
  let right = 0;
  for (let i = nums.length - 1; i >= 0; i--) {
    left = 0;
    right = i - 1;
    while (left < right) {
      if (nums[left] + nums[right] > nums[i]) {
        res += right - left;
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
}
// @lc code=end
