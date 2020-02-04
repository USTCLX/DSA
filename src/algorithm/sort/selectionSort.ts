/*
 * @Author: lixiang
 * @Date: 2020-02-04 16:29:28
 * @Last Modified by: lixiang
 * @Last Modified time: 2020-02-04 16:54:31
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
