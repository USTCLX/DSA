import { hasPathSum } from "./112.路径总和";

describe("hasPathSum", () => {
  test("[1] 0 ", () => {
    const root = { val: 1, left: null, right: null };
    expect(hasPathSum(root, 1)).toBe(true);
  });
});
