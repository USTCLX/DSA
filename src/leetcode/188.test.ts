import { maxProfit } from "./188.买卖股票的最佳时机-iv";

describe("maxProfit", () => {
  test("should 1", () => {
    expect(maxProfit(2, [2, 4, 1])).toBe(2);
  });
  test("should 2", () => {
    expect(maxProfit(2, [3, 2, 6, 5, 0, 3])).toBe(7);
  });
});
