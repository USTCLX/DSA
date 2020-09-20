/*
Author: Xiang Li 
Description: description
Created:  2020-05-24T14:59:19.899Z
*/

// 关于去重，最好的办法就是先排序

export function threeNumSum(arr: number[]): Array<Array<number>> {
  const res: Array<Array<number>> = [];
  const length = arr.length;
  if (length < 3) return res;

  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < length; i++) {
    let l = i + 1;
    let r = length - 1;

    if (arr[i] > 0) return res;

    // 去重
    if (i > 0 && arr[i] === arr[i - 1]) continue;

    while (l < r) {
      if (arr[i] + arr[l] + arr[r] === 0) {
        res.push([arr[i], arr[l], arr[r]]);
        while (arr[l] === arr[l + 1]) l++;
        while (arr[r] === arr[r - 1]) r--;
        l++;
        r--;
      } else if (arr[i] + arr[l] + arr[r] < 0) {
        l++;
      } else if (arr[i] + arr[l] + arr[r] > 0) {
        r--;
      }
    }
  }

  return res;
}

/**
 * 暴力法，三层循环
 * 由于需要去重，也就组合中的数据不能重复，有两种解决方案
 * 1. 求出所有的解之后，把重复的去掉
 * 2. 在求解的过程中，跳过重复的值
 *  2.1 将数组排序，每层循环最后，记录下当前的值，如果已经和上一次的遍历值一样，则可以跳过。
 * @param arr
 */
// [-1, 0, 1, 2, -1, -4]
// [-4, -1, -1, 0, 1, 2]
export function threeSum1(arr: Array<number>): Array<Array<number>> {
  if (arr.length < 3) return [];

  arr.sort((a, b) => a - b);

  const res = [];
  let a, b, c;
  for (let i = 0; i < arr.length; i++) {
    if (a === arr[i]) {
      continue;
    }
    for (let j = i + 1; j < arr.length; j++) {
      if (b === arr[j]) {
        continue;
      }
      for (let k = j + 1; k < arr.length; k++) {
        if (c === arr[k]) {
          continue;
        }
        if (arr[i] + arr[j] + arr[k] === 0) {
          res.push([arr[i], arr[j], arr[k]]);
        }
        c = arr[k];
      }
      b = arr[j];
      c = null;
    }
    a = arr[i];
    b = null;
    c = null;
  }
  return res;
}

/**
 * 两层循环
 * 使用一个额外的Set
 * 这个方法不好，因为不好去重，很难判断。
 * @param arr
 */
export const threeSum2 = function(arr: Array<number>): Array<Array<number>> {
  const set = new Set();
  const res = [];
  arr.sort((a, b) => a - b);
  let a, b;
  for (let i = 0; i < arr.length; i++) {
    set.clear();

    for (let j = i; j < arr.length; j++) {
      // 检查当前数值是否已经存在于map中
      const cur = -arr[i] - arr[j];
      if (set.has(cur)) {
        res.push([arr[i], arr[j], cur]);
      } else {
        set.add(cur);
      }

      b = arr[j];
    }

    a = arr[i];
  }
  return res;
};
