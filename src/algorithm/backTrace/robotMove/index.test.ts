import movingCount from "./index";

describe("movingCount", () => {
  test.each([
    // 普通方格
    [5, 10, 10, 21],
    // 普通方格
    [15, 20, 20, 359],
    // 方格只有一列
    [10, 1, 100, 29],
    // 方格只有一行一列
    [15, 1, 1, 1],
    // 不能进任意方格
    [-10, 10, 10, 0]
  ])("movingCount(%d)", (threshold, rows, cols, expected) => {
    expect(movingCount(threshold, rows, cols)).toBe(expected);
  });
});
