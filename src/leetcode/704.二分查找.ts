/*
 * @lc app=leetcode.cn id=704 lang=typescript
 *
 * [704] 二分查找
 */

// @lc code=start

// 递归实现
// function binarySearch(
//   nums: number[],
//   left: number,
//   right: number,
//   target: number
// ): number {
//   if (left > right) return -1;

//   const mid = (left + right) >> 1;
//   if (nums[mid] === target) {
//     return mid;
//   } else if (nums[mid] < target) {
//     return binarySearch(nums, mid + 1, right, target);
//   } else {
//     return binarySearch(nums, left, mid - 1, target);
//   }
// }

// 迭代实现
function binarySearch(
  nums: number[],
  left: number,
  right: number,
  target: number
): number {
  // 这里一定是小于等于，因为left=right时，left可能就是目标值

  // 退出循环的条件
  while (left <= right) {
    // mid的取值
    const mid = left + ((right - left) >> 1);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      // left的更新
      left = mid + 1;
    } else {
      // right的更新
      right = mid - 1;
    }
  }
  return -1;
}

function search(nums: number[], target: number): number {
  return binarySearch(nums, 0, nums.length - 1, target);
}
// @lc code=end
