/**
 * 二分查找模版
 * 1. low <= high
 * 2. mid = mid-1;
 * @param nums 有序数组
 * @param target 目标值
 */
export default function binarySearch(
  nums: Array<number>,
  target: number
): number {
  let low = 0;
  let high = nums.length - 1;
  let mid = 0;
  while (low <= high) {
    mid = low + ((high - low) >> 1);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
