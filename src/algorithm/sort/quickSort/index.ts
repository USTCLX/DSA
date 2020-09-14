import swap from "../../../tools/swap";

/**
 * 同向双指针，核心思想是l~p1-1中的数据是小于等于pivot的，p1~p2中的数据是大于pivot的。
 * 最后交换pivot和p1-1,并返回p1
 * @param nums 数组
 * @param l 左边界
 * @param r 右边界
 */
function partition1(nums: Array<number>, l: number, r: number): number {
  if (l >= r) return r;
  const pivot = nums[l];
  let p1, p2;
  p1 = p2 = l + 1;
  // l~p1-1 代表小于等于pivot的数据
  // p1~p2 代表大于pivot的数据
  // 迭代p2 到 r ，如果nums[p2]大于pivot，则交换p1和p2 的元素，p1++;
  for (; p2 <= r; p2++) {
    if (nums[p2] <= pivot) {
      swap(nums, p1++, p2);
    }
  }
  swap(nums, l, p1 - 1);
  return p1 - 1;
}

/**
 * 逆向双指针
 * p1 = l+1; p2 = r;
 * p1和p2 逆向移动，当p1>pvoit p2<=pvoit时，交换p1和p2
 * 否则p1<=pvoit p1++
 * 否则p2>pvoit p2--
 * 最后将pvoit和p2的位置交换，并返回p2
 * @param nums 数组
 * @param l 左边界
 * @param r 右边界
 */
function partition2(nums: Array<number>, l: number, r: number): number {
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
  // 交换回来
  swap(nums, l, p2);
  return p2;
}

function quickSort(nums: Array<number>, l: number, r: number) {
  if (l >= r) return;
  const m = partition2(nums, l, r);
  quickSort(nums, l, m - 1);
  quickSort(nums, m + 1, r);
}

export default function sort(nums: Array<number>): Array<number> {
  if (!nums || !nums.length) return nums;
  quickSort(nums, 0, nums.length - 1);
  return nums;
}
