/*
 * @lc app=leetcode.cn id=215 lang=typescript
 *
 * [215] 数组中的第K个最大元素
 */

// @lc code=start

function swap(nums: number[], a: number, b: number): void {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

function partition(nums: number[], left: number, right: number): number {
  if (left >= right) return right;

  const start = left;
  const pivot = nums[left++];

  while (left <= right) {
    if (nums[left] < pivot && nums[right] > pivot) {
      swap(nums, left++, right--);
    } else if (nums[left] >= pivot) {
      left++;
    } else {
      right--;
    }
  }
  swap(nums, start, right);
  return right;
}

// function findKthLargest(nums: number[], k: number): number {
//   let left = 0;
//   let right = nums.length - 1;

//   while (left <= right) {
//     let p = partition(nums, left, right);
//     if (p + 1 === k) {
//       return nums[p];
//     } else if (p + 1 > k) {
//       right = p - 1;
//     } else {
//       left = p + 1;
//     }
//   }
//   return 0;
// }

function findKthLargest(nums: number[], k: number): number {
  nums = nums.sort((a, b) => b - a);

  return nums[k - 1];
}
// @lc code=end

export { findKthLargest };
