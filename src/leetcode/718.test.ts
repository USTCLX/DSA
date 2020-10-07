import { findLength } from "./718.最长重复子数组";

describe("findLenght", () => {
  test("[0,0,0,0,1],[1,0,0,0,0]", () => {
    expect(findLength([0, 0, 0, 0, 1], [1, 0, 0, 0, 0])).toBe(4);
  });
});
