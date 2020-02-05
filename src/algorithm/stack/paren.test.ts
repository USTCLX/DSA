import paren from "./paren";

describe("Test paren", () => {
  test("case 1", () => {
    expect(paren("()")).toBe(true);
  });
  test("case 2", () => {
    expect(paren("(")).toBe(false);
  });
  test("case 3", () => {
    expect(paren("((())())")).toBe(true);
  });
  test("case 4", () => {
    expect(paren("(()(()())()")).toBe(false);
  });
  test("case 5", () => {
    expect(paren("()()())")).toBe(false);
  });
  test("case 6", () => {
    expect(paren("")).toBe(true);
  });
  test("case 7 ", () => {
    expect(paren("[{}]")).toBe(true);
  });
  test("case 8", () => {
    expect(paren("()[]{}")).toBe(true);
  });
  test("case 9 ", () => {
    expect(paren("{{()}}[")).toBe(false);
  });
});
