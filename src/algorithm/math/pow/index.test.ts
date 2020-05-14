import power from "./index";

describe("power", () => {
  test("should throw error", () => {
    expect(() => {
      power(0, -1);
    }).toThrowError("invalid input");
  });

  test.each([
    [2, 3, 8],
    [-2, 3, -8],
    [2, -3, 0.125],
    [2, 0, 1],
    [0, 0, 1],
    [0, 4, 0]
  ])("power(%d)", (base, exponent, expected) => {
    expect(power(base, exponent)).toBe(expected);
  });
});
