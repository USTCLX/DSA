/**
 * 合并两个有序的数组
 * @param l1 数组一
 * @param l2 数组二
 */
export default function mergeTwoLists(l1: Array<number>, l2: Array<number>) {
  let p1 = l1.length - 1;
  let p2 = l2.length - 1;
  let p = l1.length + l2.length - 1;
  while (p >= 0) {
    if (p2 < 0 || l1[p1] > l2[p2]) {
      l1[p--] = l1[p1--];
    } else if (p1 < 0 || l1[p1] <= l2[p2]) {
      l1[p--] = l2[p2--];
    }
  }
  return l1;
}
