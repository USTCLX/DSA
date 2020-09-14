/**
 * 1.将数组划分为两个部分，前半部分已经排序，后半部分待排序
 * 2.每次取出后半部分的头一个元素，依次与已经排序的元素比较
 * 3.如果较小就往左移动，直到找到一个合适的位置，将元素放下
 * @param n 待排数组
 */
export default function insertSort(n: Array<number>): Array<number> {
  if (!n) return;
  // 以i为分界符号，左边已经有序 右边无序
  for (let i = 1; i < n.length; i++) {
    const curVal = n[i]; // 选出待插入元素
    let j = i - 1;
    for (; j >= 0; j--) {
      if (n[j] > curVal) {
        // 如果当前元素大于待插入元素，则将当前元素右移
        n[j + 1] = n[j];
      } else {
        // 否则跳出循环
        break;
      }
    }
    // 将当前元素放在 j+1 的位置
    n[j + 1] = curVal;
  }
  return n;
}
