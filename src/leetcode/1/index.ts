/*
Author: Xiang Li 
Description: description
Created:  2020-05-24T08:15:23.537Z
*/

export function findTwoSum(arr: number[], target: number): number[] {
  let a, b;
  for (let i = 0; i < arr.length; i++) {
    a = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      b = arr[j];
      if (a + b === target) {
        return [i, j];
      }
    }
  }
  return [];
}

export function betterFindTwoSum(arr: number[], target: number): number[] {
  const map = new Map();
  let delta;
  for (let i = 0; i < arr.length; i++) {
    delta = target - arr[i];
    if (map.has(delta)) {
      return [map.get(delta), i];
    } else {
      map.set(arr[i], i);
    }
  }
  return [];
}
