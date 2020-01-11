import fib from "./index";

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
