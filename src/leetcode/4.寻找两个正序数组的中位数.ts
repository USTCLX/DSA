/*
 * @lc app=leetcode.cn id=4 lang=typescript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const len = len1 + len2;

  let p1 = 0;
  let p2 = 0;

  let pre = 0;
  let cur = 0;

  for (let i = 0; i <= len / 2; i++) {
    pre = cur;

    if (p1 < len1 && (p2 >= len2 || nums1[p1] <= nums2[p2])) {
      cur = nums1[p1++];
    } else if (p2 < len2 && (p1 >= len1 || nums2[p2] < nums1[p1])) {
      cur = nums2[p2++];
    }
  }

  if (len % 2 === 0) {
    return (pre + cur) / 2;
  } else {
    return cur;
  }
}
// @lc code=end
