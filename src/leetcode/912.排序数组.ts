/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start
// 插入排序来一个
// function sortArray(nums: number[]): number[] {
//   if (!nums.length) return nums;

//   for (let i = 1; i < nums.length; i++) {
//     const cur = nums[i];

//     let j = i - 1;
//     for (; j >= 0; j--) {
//       if (nums[j] > cur) {
//         nums[j + 1] = nums[j];
//       } else {
//         break;
//       }
//     }

//     nums[j + 1] = cur;
//   }

//   return nums;
// }

// 快速排序来一个

function swap(nums: number[], a: number, b: number) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

function partition(nums: number[], left: number, right: number): number {
  if (left >= right) return right;

  const start = left;
  const pvoit = nums[left];

  left = left + 1;
  while (left <= right) {
    if (nums[left] > pvoit && nums[right] < pvoit) {
      swap(nums, left, right);
      left++;
      right--;
    } else if (nums[left] <= pvoit) {
      left++;
    } else {
      right--;
    }
  }
  swap(nums, start, right);
  return right;
}

function quickSort(nums: number[], left: number, right: number) {
  if (left >= right) return nums;

  const p = partition(nums, left, right);
  quickSort(nums, p + 1, right);
  quickSort(nums, left, p - 1);

  return nums;
}

function sortArray(nums: number[]): number[] {
  return quickSort(nums, 0, nums.length);
}
// @lc code=end
