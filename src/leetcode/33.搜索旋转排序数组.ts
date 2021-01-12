/*
 * @lc app=leetcode.cn id=33 lang=typescript
 *
 * [33] 搜索旋转排序数组
 */

// @lc code=start
// 方法1:暴力法，这里就不写了
// 方法2:二分查找
// 首先找到mid这个值，
// 然后和目标值比较，如果相等直接返回mid的索引
// 如果mid<target，应该往mid的右边查找
//   需要判断mid+1 是否大于mid。否则返回-1
// 如果mid>target，应该往mid的左边查找
//   需要判断mid-1 是否小于mid。否则返回-1
// function search(nums: number[], target: number): number {
//   if (!nums.length) return -1;

//   let left = 0;
//   let right = nums.length - 1;
//   while (left <= right) {
//     let mid = (left + right) >> 1;
//     if (nums[mid] === target) {
//       return mid;
//     } else {
//       if (mid > 0 && nums[mid] < nums[mid - 1]) {
//         // 旋转点，左边的都比自己大
//         if (nums[mid - 1] >= target && nums[left] <= target) {
//           // 去左区间
//           right = mid - 1;
//         } else if (nums[right] >= target && nums[mid] < target) {
//           left = mid + 1;
//         } else {
//           return -1;
//         }
//       } else if (mid <= nums.length - 2 && nums[mid] > nums[mid + 1]) {
//         // 旋转点，右边的都比自己小
//         if (nums[mid] > target && nums[left] <= target) {
//           right = mid - 1;
//         } else if (nums[mid + 1] <= target && nums[right] >= target) {
//           left = mid + 1;
//         } else {
//           return -1;
//         }
//       } else if (nums[mid] > target) {
//         right = mid - 1;
//       } else if (nums[mid] < target) {
//         left = mid + 1;
//       }
//     }
//   }
//   return -1;
// }

// 二分查找
// 找到mid之后，首先判断左半边有序，还是右半边有序
// 然后在有序的那半边里面，如果target在最大最小值之间，就继续搜索有序的那半边。否则搜索无序的那半边
function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + ((right - left) >> 1);
    if (nums[mid] === target) {
      return mid;
    }

    // 先把左右两个观测点给确认一下
    if (target === nums[left]) {
      return left;
    }

    if (target === nums[right]) {
      return right;
    }

    if (nums[mid] > nums[left]) {
      // 左半边有序
      if (nums[mid] > target && nums[left] < target) {
        // 目标值在左半边范围内
        right = mid - 1;
      } else {
        // 目标值不在左半边范围内，搜索右半边
        left = mid + 1;
      }
    } else {
      // 右半边有序
      if (nums[mid] < target && nums[right] > target) {
        // 目标值在右半边范围内
        left = mid + 1;
      } else {
        // 目标值不在右半边的范围内，搜索左半边
        right = mid - 1;
      }
    }
  }
  return -1;
}
// @lc code=end
export { search };
