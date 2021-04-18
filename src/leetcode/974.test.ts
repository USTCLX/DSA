import { subarraysDivByK } from "./974.和可被-k-整除的子数组";

test("1", () => {
  expect(subarraysDivByK([4, 5, 0, -2, -3, 1], 5)).toBe(7);
});

test("2", () => {
  expect(subarraysDivByK([-1, 2, 9], 2)).toBe(2);
});
