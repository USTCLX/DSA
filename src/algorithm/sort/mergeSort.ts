/*
 * @Author: lixiang
 * @Date: 2020-02-02 22:04:45
 * @Last Modified by: lixiang
 * @Last Modified time: 2020-02-04 16:36:58
 * @Description: 归并排序
 */

/**
 * 合并一个序列A中的两个子序列B，C
 * 其中B和C都已经是有序的
 * 使用3个指针，分别指向A，B，C
 */
const merge = (
  arrA: Array<number>,
  lo: number,
  mi: number,
  hi: number
): void => {
  let pa = lo;
  // bugs
  // 1: pb应该等于0，而不是lo,因为pb是arrB的索引，从0开始，并且后面的循环使用的是lb(长度)与pb做的比较
  // 2: 同理pc应该等于0，而不是mi
  let pb = 0;
  let pc = 0;
  const arrB = arrA.slice(lo, mi);
  const lb = mi - lo;
  const arrC = arrA.slice(mi, hi);
  const lc = hi - mi;
  for (; pb < lb || pc < lc; ) {
    if (pb < lb && (pc >= lc || arrB[pb] <= arrC[pc])) {
      arrA[pa++] = arrB[pb++];
    }
    if (pc < lc && (pb >= lb || arrC[pc] <= arrB[pb])) {
      arrA[pa++] = arrC[pc++];
    }
  }
};

/**
 * 归并排序
 * 递归，递归基为lo==hi,此时可以直接返回
 * 否则计算mi，分别对左半部分，和右半部分进行归并排序
 * 排序完成，将排序结果进行合并，合并算法见上面
 */
const mergeSort = (
  arr: Array<number>,
  lo: number,
  hi: number
): Array<number> => {
  // bug
  // 1: lo应该在大于等于hi-1时返回，因为hi是哨兵，并不存在，lo比hi少1时，代表只包含一个元素的区间
  // 2: 应该返回arr，不然当传入[]时，将返回undefined
  if (lo >= hi - 1) return arr;
  const mi = (lo + hi) >> 1;
  mergeSort(arr, lo, mi);
  mergeSort(arr, mi, hi);
  merge(arr, lo, mi, hi);
  return arr;
};

export default mergeSort;
