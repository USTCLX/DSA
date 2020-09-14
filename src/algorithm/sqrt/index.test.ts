import sqrt from "./index";

describe("sqrt", () => {
  test("0", () => {
    expect(sqrt(0)).toBe(0);
  });
  test("1", () => {
    expect(sqrt(1)).toBe(1);
  });
  test("4", () => {
    expect(sqrt(4)).toBe(2);
  });
  test("3", () => {
    expect(sqrt(2)).toBe(1.414214);
  });
});
