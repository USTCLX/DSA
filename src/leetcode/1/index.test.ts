import { findTwoSum, betterFindTwoSum } from "./index";

describe("findTwoSum", () => {
  test("2,7,11,15", () => {
    expect(findTwoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  test("11,2,15,7", () => {
    expect(findTwoSum([11, 2, 15, 7], 9)).toEqual([1, 3]);
  });
  test("2,7,11,5", () => {
    expect(findTwoSum([2, 7, 11, 15], 10)).toEqual([]);
  });
});

describe("betterFindTwoSum", () => {
  test("2,7,11,15", () => {
    expect(betterFindTwoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  test("11,2,15,7", () => {
    expect(betterFindTwoSum([11, 2, 15, 7], 9)).toEqual([1, 3]);
  });
  test("2,7,11,5", () => {
    expect(betterFindTwoSum([2, 7, 11, 15], 10)).toEqual([]);
  });
});
