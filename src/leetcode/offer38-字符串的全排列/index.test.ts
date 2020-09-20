import { permutation } from "./index";

describe("permutation", () => {
  test("abc", () => {
    expect(permutation("abc")).toEqual(
      expect.arrayContaining(["abc", "acb", "bac", "bca", "cab", "cba"])
    );
  });
});
