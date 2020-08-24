import { findMedianSortedArrays } from "./index";

describe("findMedianSortedArrays", () => {
  test("[1,3],[2]", () => {
    expect(findMedianSortedArrays([1, 3], [2])).toBe(2);
  });
});
