import cuttingRope from "./index";

describe("cuttingRope", () => {
  test.each([
    [1, 0],
    [2, 1],
    [3, 2],
    [4, 4],
    [5, 6],
    [6, 9],
    [7, 12],
    [8, 18],
    [9, 27],
    [10, 36],
    [50, 86093442]
  ])("cuttingRope(%d)", (input, expected) => {
    expect(cuttingRope(input)).toBe(expected);
  });
});
