import { sortArray } from "./912.排序数组";

describe("test", () => {
  test("should ", () => {
    expect(sortArray([5, 1, 1, 2, 0, 0])).toEqual([0, 0, 1, 1, 2, 5]);
  });

  test("[5,2,3,1,7,8,10,6]", () => {
    expect(sortArray([5, 2, 3, 1, 7, 8, 10, 6])).toEqual([
      1,
      2,
      3,
      5,
      6,
      7,
      8,
      10
    ]);
  });
});
