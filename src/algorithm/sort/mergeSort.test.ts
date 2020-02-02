/*
 * @Author: lixiang
 * @Date: 2020-02-02 22:29:09
 * @Last Modified by: lixiang
 * @Last Modified time: 2020-02-02 22:51:33
 */
import mergeSort from "./mergeSort";
describe("Test merge sort", () => {
  test("3,2,1", () => {
    const arr = [3, 2, 1];
    expect(mergeSort(arr, 0, arr.length)).toEqual([1, 2, 3]);
  });
  test("1,2,3,4", () => {
    const arr = [1, 2, 3, 4];
    expect(mergeSort(arr, 0, arr.length)).toEqual([1, 2, 3, 4]);
  });
  test("3,2,5,2,6,3,8,0", () => {
    const arr = [3, 2, 5, 2, 6, 3, 8, 0];
    expect(mergeSort(arr, 0, arr.length)).toEqual([0, 2, 2, 3, 3, 5, 6, 8]);
  });
  test("null", () => {
    const arr: Array<number> = [];
    expect(mergeSort(arr, 0, arr.length)).toEqual([]);
  });
  test("1", () => {
    const arr = [1];
    expect(mergeSort(arr, 0, arr.length)).toEqual([1]);
  });
});
