import { lscByRecursion } from "./index";

describe("lscByRecursion", () => {
  test("should return 234 when strA is 1234 and strB is 2345", () => {
    let strA = "1234";
    let strB = "2345";
    expect(lscByRecursion(strA, strB)).toBe("234");
  });
  test("should return null when strA is null or strB is null", () => {
    expect(lscByRecursion("", "123")).toBe("");
    expect(lscByRecursion("123", "")).toBe("");
    expect(lscByRecursion("", "")).toBe("");
  });
  test("should return 1 when strA is 1 and strB is1", () => {
    expect(lscByRecursion("1", "1")).toBe("1");
  });
  test("should reutrn data when strA is educational ans strB is advantage", () => {
    expect(lscByRecursion("educational", "advantage")).toBe("data");
  });
});
