import { atoi } from "./index";

describe("atoi", () => {
  test("42 ", () => {
    expect(atoi("42")).toBe(42);
  });
  test("-42", () => {
    expect(atoi("-42")).toBe(-42);
  });
  test("4193 with words", () => {
    expect(atoi("4193 with words")).toBe(4193);
  });
  test("words and 987 ", () => {
    expect(atoi("words and 987")).toBe(0);
  });
  test(" -987 should", () => {
    expect(atoi(" -987 should")).toBe(-987);
  });
  test("-should", () => {
    expect(atoi("-should")).toBe(0);
  });
  test("-91283472332 ", () => {
    expect(atoi("-91283472332")).toBe(-2147483648);
  });
  test("91283472332 ", () => {
    expect(atoi("91283472332")).toBe(2147483647);
  });
});
