import fib, { fibByMemo } from "./index";

describe("fibonacci sequence", () => {
  test("output should be 0, when input is 1", () => {
    expect(fib(0)).toBe(1);
  });
  test("output should be 1,when input is 1", () => {
    expect(fib(1)).toBe(1);
  });
  test("oupt should return 1,when input is 2", () => {
    expect(fib(2)).toBe(2);
  });
  test("output should return 3,when input is 3", () => {
    expect(fib(3)).toBe(3);
  });
  test("output should return 34,when input is 8", () => {
    expect(fib(8)).toBe(34);
  });
  test("output should return 377,when input is 13", () => {
    expect(fib(13)).toBe(377);
  });
});

describe("fibByMemo", () => {
  test("0 0", () => {
    expect(fibByMemo(0)).toBe(0);
  });
  test("1 1", () => {
    expect(fibByMemo(1)).toBe(1);
  });
  test("2:1", () => {
    expect(fibByMemo(2)).toBe(1);
  });
  test("3:2", () => {
    expect(fibByMemo(3)).toBe(2);
  });
  test("4:3", () => {
    expect(fibByMemo(4)).toBe(3);
  });
});
