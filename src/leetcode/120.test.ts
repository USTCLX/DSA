import { minimumTotal } from "./120.三角形最小路径和";

describe("minimumTotal", () => {
  test("minimumTotal case1", () => {
    const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
    expect(minimumTotal(triangle));
  });
});
