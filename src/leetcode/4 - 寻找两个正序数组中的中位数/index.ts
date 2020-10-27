/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
export const findMedianSortedArrays = function(
  nums1: Array<number>,
  nums2: Array<number>
): number {
  const len1 = nums1.length;
  const len2 = nums2.length;
  const len = len1 + len2;
  let p1 = 0,
    p2 = 0;
  let prev = 0,
    curr = 0;

  for (let i = 0; i <= len / 2; i++) {
    prev = curr;
    if (p1 < len1 && (p2 >= len2 || nums1[p1] < nums2[p2])) {
      curr = nums1[p1];
      p1++;
    } else if (p2 < len2 && (p1 >= len1 || nums2[p2] <= nums1[p1])) {
      curr = nums2[p2];
      p2++;
    }
  }

  if (len % 2 === 0) {
    curr = (prev + curr) / 2;
  }
  return curr;
};
