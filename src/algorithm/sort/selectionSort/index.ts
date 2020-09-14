import swap from "../../../tools/swap";

/**
 * 选择排序，同样是把数据分为两个部分，前半部分有序，后半部分无序
 * 每次从无序的数组中，挑选出最小的数，放在无数数组的最前面。遍历完成后，整个数组有序
 * 两层循环，第一层控制循环最为有序和无序的分界线
 * 第二层循环，从无序数组中，找到最小值
 * 第二层循环结束后，将找到的最小值和无序数组中的第一个值交换位置
 *
 * 备注：
 * 不稳定排序，因为有位置的交换
 * 应该是三种O(n^2)的排序算法中最慢的，因为无法优化而省略一些比较
 * @param n
 */
export default function selectionSort(n: Array<number>): Array<number> {
  for (let i = 0; i < n.length; i++) {
    let min = i;
    for (let j = i; j < n.length; j++) {
      if (n[j] < n[min]) {
        min = j;
      }
    }
    swap(n, i, min);
  }
  return n;
}
