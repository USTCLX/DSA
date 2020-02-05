/*
 * @Author: lixiang
 * @Date: 2020-02-04 16:29:28
 * @Last Modified by: lixiang
 * @Last Modified time: 2020-02-04 17:04:40
 * @Description: 选择排序，与冒泡排序相比，同样都有比较和移动两个操作，但是选择排序，移动的成本更低。
 */
import swap from "../../tools/swap";

export default (arr: Array<number>): Array<number> => {
  for (let i = 0; i < arr.length; i++) {
    let max = -Infinity;
    let index = -1;
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] >= max) {
        max = arr[j];
        index = j;
      }
    }
    if (index > -1) swap(arr, index, arr.length - 1 - i);
  }
  return arr;
};
