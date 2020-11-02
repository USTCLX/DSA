import swap from "../tools/swap";

function partition(nums: number[], left: number, right: number) {
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
