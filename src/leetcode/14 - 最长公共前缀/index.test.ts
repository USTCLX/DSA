import { longestCommonPrefix, longestCommonPrefix2 } from "./index";

describe("longestCommonPrefix", () => {
  test('["flower","flow","flight"]', () => {
    expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl");
  });

  test('["dog","racecar","car"]', () => {
    expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("");
  });

  test("[]", () => {
    expect(longestCommonPrefix([])).toBe("");
  });
});

describe("longestCommonPrefix2", () => {
  test('["flower","flow","flight"]', () => {
    expect(longestCommonPrefix2(["flower", "flow", "flight"])).toBe("fl");
  });

  test('["dog","racecar","car"]', () => {
    expect(longestCommonPrefix2(["dog", "racecar", "car"])).toBe("");
  });

  test("[]", () => {
    expect(longestCommonPrefix2([])).toBe("");
  });
});
