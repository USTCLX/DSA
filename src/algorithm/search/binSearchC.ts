/**
 * 二分查找的一种最优算法。
 * 从一个有序数组arr中查找目标值e
 * 语义：返回不大于e的最后一个元素
 * 这种语义非常方便进行插入操作
 */
export default (
  arr: Array<number>,
  e: number,
  lo: number,
  hi: number
): number => {
  while (lo < hi) {
    const mi = (lo + hi) >> 1;
    e < arr[mi] ? (hi = mi) : (lo = mi + 1);
  }
  return --lo;
};
