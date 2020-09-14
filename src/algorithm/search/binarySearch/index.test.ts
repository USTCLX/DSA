import binarySearch from "./index";

describe("binarySearch", () => {
  test("[],2", () => {
    expect(binarySearch([], 2)).toBe(-1);
  });
  test("[1,2,3,4],2", () => {
    expect(binarySearch([1, 2, 3, 4], 2)).toBe(1);
  });
  test("[1,2,3,4],5", () => {
    expect(binarySearch([1, 2, 3, 4], 5)).toBe(-1);
  });
});
