import isIsomorphic from "./index";

describe("Test of isIsomorphic", () => {
  test("aba baa", () => {
    expect(isIsomorphic("aba", "baa")).toBe(false);
  });
});
