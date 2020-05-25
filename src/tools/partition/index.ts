/*
 * @Author: your name
 * @Date: 2020-04-20 23:51:44
 * @LastEditTime: 2020-04-21 00:13:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /tsproj/src/tools/partition.ts
 */
import swap from "../swap";

export const partition = (
  data: number[],
  start: number,
  end: number
): number => {
  if (start >= end) {
    return start;
  }
  if (start < 0 || end > data.length - 1) {
    throw new Error("");
  }

  let index = start;
  let p = start + 1;
  const t = data[start];
  while (++index <= end) {
    if (t > data[p]) {
      p++;
    } else if (data[index] < t) {
      swap(data, p, index);
      p++;
    }
  }
  swap(data, start, p - 1);
  return p - 1;
};

export const partition2 = (
  arr: Array<number>,
  start: number,
  end: number
): number => {
  if (start >= end) {
    return start;
  }

  const pivot = arr[start];
  let left = start + 1;
  let right = end;

  while (left < right) {
    if (arr[left] >= pivot && arr[right] <= pivot) {
      swap(arr, left, right);
      left++;
      right--;
    } else if (arr[left] < pivot) {
      left++;
    } else if (arr[right] > pivot) {
      right--;
    }
  }

  swap(arr, start, right);
  return right;
};

export const partition3 = (
  arr: Array<number>,
  start: number,
  end: number
): number => {
  const pivot = arr[start];
  let left = start + 1;
  let right = end;
  while (left < right) {
    if (arr[left] > pivot && arr[right] < pivot) {
      swap(arr, left, right);
      left++;
      right--;
    } else if (arr[left] <= pivot) {
      left++;
    } else if (arr[right] >= pivot) {
      right--;
    }
  }
  swap(arr, start, right);
  return right;
};
