/*
 * @lc app=leetcode.cn id=153 lang=typescript
 *
 * [153] 寻找旋转排序数组中的最小值
 */

// @lc code=start
// 顺序查找 O(n)
// function findMin(nums: number[]): number {
//   let min = nums[0];
//   for (let i = 1; i < nums.length; i++) {
//     if (nums[i - 1] > nums[i]) {
//       min = nums[i];
//       break;
//     }
//   }
//   return min;
// }

// 二分查找
// 数组应该是升序，在一个点上突然降序，那么这个点就是变化点
// 比如 3 4 5 1 2，那么1就是变化点
// 1. nums[mid]>nums[mid+1] 那么mid+1就是变化点。返回nums[mid+1]
// 2. nums[mid-1]>nums[mid] 那么mid就是变化点。返回nums[mid]
// 如果上面两点都不满足，需要确定继续向左区间还是向右区间查找
// 3. 如果nums[mid]>nums[0] 说明mid还在上升区间，只能往右半区间继续查找
// 4. 否则说明变化点在左边，需要向左边查找
function findMin(nums: number[]): number {
  let left = 0;
  let right = nums.length - 1;
  // 如果数组没有变化，直接返回nums[0]
  // 这里需要>= 因为数组可能只有一项，比如[1]
  if (nums[right] >= nums[0]) {
    return nums[0];
  }

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (mid + 1 <= nums.length - 1 && nums[mid] > nums[mid + 1]) {
      return nums[mid + 1];
    }
    if (mid - 1 >= 0 && nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }

    // 没找到，缩减区间
    if (nums[mid] > nums[0]) {
      // 此时左边都是升序,向右半部分继续查找
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
}
// @lc code=end
