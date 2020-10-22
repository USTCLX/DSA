/*
 * @lc app=leetcode.cn id=912 lang=typescript
 *
 * [912] 排序数组
 */

// @lc code=start

function swap(nums: number[], a: number, b: number) {
  const temp = nums[a];
  nums[a] = nums[b];
  nums[b] = temp;
}

function partition(nums: number[], left: number, right: number): number {
  if (left >= right) return right;

  const pvoit = nums[left];
  const start = left;
  left = left + 1;
  while (left <= right) {
    if (nums[left] > pvoit && nums[right] < pvoit) {
      swap(nums, left++, right--);
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
  if (left >= right) return;
  const mid = partition(nums, left, right);
  quickSort(nums, left, mid - 1);
  quickSort(nums, mid + 1, right);
}

function sortArray(nums: number[]): number[] {
  quickSort(nums, 0, nums.length - 1);
  return nums;
}
// @lc code=end
