import { lengthOfLIS } from "./300.最长上升子序列";

describe("lengthOfLIS", () => {
  test("lengthOfLIS dp", () => {
    expect(lengthOfLIS([10, 9, 2, 5, 3, 7, 101, 18])).toEqual(4);
  });
});
