import { minimumTotal } from "./index";

describe("minimumTotal", () => {
  test("should be 11", () => {
    const triangle = [[2], [3, 4], [6, 5, 7], [4, 1, 8, 3]];
    expect(minimumTotal(triangle)).toBe(11);
  });
});
