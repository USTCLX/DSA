import { findMedianSortedArrays } from "./4.寻找两个正序数组的中位数";

describe("findMedianSortedArrays", () => {
  test("[1,3],[2]", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });
});
