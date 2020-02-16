import countPrimes from "./index";

describe("Test of count Primes", () => {
  test("10 should has  4", () => {
    expect(countPrimes(10)).toBe(4);
  });
  test("2 should has 1", () => {
    expect(countPrimes(2)).toBe(0);
  });
});
