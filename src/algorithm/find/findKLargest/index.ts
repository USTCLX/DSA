import swap from "../../../tools/swap";

function partition(nums: Array<number>, l: number, r: number): number {
  if (l >= r) return r;
  const pvoit = nums[l];
  let p1 = l + 1;
  let p2 = r;
  while (p1 <= p2) {
    if (nums[p1] > pvoit && nums[p2] <= pvoit) {
      swap(nums, p1++, p2--);
    } else if (nums[p1] <= pvoit) {
      p1++;
    } else if (nums[p2] > pvoit) {
      p2--;
    }
  }
  swap(nums, l, p2);
  return p2;
}

function find(nums: Array<number>, l: number, r: number, k: number): number {
  let p1 = l;
  let p2 = r;
  let p;
  while (p1 <= p2) {
    p = partition(nums, p1, p2);
    if (p + 1 === k) {
      return nums[p];
    } else if (p + 1 < k) {
      p1 = p + 1;
    } else {
      p2 = p;
    }
  }
}

export default function findKLargest(nums: Array<number>, k: number): number {
  return find(nums, 0, nums.length - 1, k);
}
