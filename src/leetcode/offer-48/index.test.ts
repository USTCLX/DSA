import { lengthOfLongestSubstring, lengthOfLongestSubstring2 } from "./index";

describe("lengthOfLongestSubstring", () => {
  test("pwwkew ", () => {
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3);
  });

  test("au", () => {
    expect(lengthOfLongestSubstring("au")).toBe(2);
  });

  test("bbb", () => {
    expect(lengthOfLongestSubstring("bbb")).toBe(1);
  });

  test("abcabcbb", () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3);
  });
});

describe("lengthOfLongestSubstring2", () => {
  test("pwwkew ", () => {
    expect(lengthOfLongestSubstring2("pwwkew")).toBe(3);
  });

  test("au", () => {
    expect(lengthOfLongestSubstring2("au")).toBe(2);
  });

  test("bbb", () => {
    expect(lengthOfLongestSubstring2("bbb")).toBe(1);
  });

  test("abcabcbb", () => {
    expect(lengthOfLongestSubstring2("abcabcbb")).toBe(3);
  });
});
