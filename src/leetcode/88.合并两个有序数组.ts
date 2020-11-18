/*
 * @lc app=leetcode.cn id=88 lang=typescript
 *
 * [88] 合并两个有序数组
 */

/**
 * 根据题意，这一题显然是把合并的结果直接放到nums1里面。
 * 如果从前往后放置，可能会覆盖掉nums1的元素，否则需要整体向后移动nums的元素
 * 比如[1,4,5],[2,3]
 * 所以需要从后往前放置。
 * @param nums1
 * @param m
 * @param nums2
 * @param n
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */

function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let p = m + n - 1;
  let p1 = m - 1;
  let p2 = n - 1;
  while (p >= 0) {
    if (p1 >= 0 && (p2 < 0 || nums1[p1] >= nums2[p2])) {
      nums1[p--] = nums1[p1--];
    } else if (p2 >= 0 && (p1 < 0 || nums2[p2] > nums1[p1])) {
      nums1[p--] = nums2[p2--];
    }
  }
}
// @lc code=end
