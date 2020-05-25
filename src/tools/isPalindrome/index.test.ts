import { isPalindrome } from "./index";

describe("isPalindrome", () => {
  test("", () => {
    expect(isPalindrome("")).toBe(true);
  });
  test("a", () => {
    expect(isPalindrome("a")).toBe(true);
  });

  test("aa", () => {
    expect(isPalindrome("aa")).toBe(true);
  });

  test("aba", () => {
    expect(isPalindrome("aba")).toBe(true);
  });

  test("abba", () => {
    expect(isPalindrome("abba")).toBe(true);
  });

  test("abbba", () => {
    expect(isPalindrome("abbba")).toBe(true);
  });

  test("abca", () => {
    expect(isPalindrome("abca")).toBe(false);
  });

  test("abc", () => {
    expect(isPalindrome("abc")).toBe(false);
  });
});
