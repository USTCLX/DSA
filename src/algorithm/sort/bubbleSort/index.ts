import swap from "../../../tools/swap";

/**
 * 一次遍历，将一个最大数字冒泡到 数组尾部
 * 一共有n个数字，因此需要遍历n次
 * 因此使用两层循环，内层循环将一个最大值移动到数组尾部
 * 优化1: 如果数组有序（在内层循环中没有发生交换），可以跳出循环
 * 优化2: 第二层循环会把最大的数字放到最后，因此随着第一层循环的进行，数组的后面就是有序的，可以不用考虑了
 * @param n 待排序数组
 */
function bubbleSort(n: Array<number>): void {
  let flag = false;
  for (let i = 0; i < n.length; i++) {
    for (let j = 0; j < n.length - i - 1; j++) {
      if (n[j] > n[j + 1]) {
        // 这里的交换，其实分为三条指令，因此相比插入而言，消耗更多
        swap(n, j, j + 1);
        flag = true;
      }
    }
    if (!flag) break;
  }
}

export default bubbleSort;
