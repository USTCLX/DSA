/*
Author: Xiang Li 
Description: description
Created:  2020-05-24T11:24:59.182Z
*/

export function mergeTwoArr(arr1: number[], arr2: number[]): number[] {
  const l1 = arr1.length;
  const l2 = arr2.length;
  let l = l1 + l2;
  let p1 = l1 - 1;
  let p2 = l2 - 1;
  while (l-- >= 0) {
    if (p1 >= 0 && (p2 < 0 || arr1[p1] >= arr2[p2])) {
      arr1[l] = arr1[p1];
      p1--;
    } else if (p2 >= 0 && (p1 < 0 || arr1[p1] < arr2[p2])) {
      arr1[l] = arr2[p2];
      p2--;
    }
  }
  return arr1;
}
