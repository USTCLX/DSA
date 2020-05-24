/*
Author: Xiang Li 
Description: description
Created:  2020-05-24T14:59:19.899Z
*/

export function threeNumSum(arr: number[]): Array<Array<number>> {
  const res: Array<Array<number>> = [];
  const length = arr.length;
  if (length < 3) return res;

  arr = arr.sort((a, b) => a - b);

  for (let i = 0; i < length; i++) {
    let l = i + 1;
    let r = length - 1;

    if (arr[i] > 0) return res;

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
