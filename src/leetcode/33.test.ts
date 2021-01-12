import { search } from "./33.搜索旋转排序数组";

test("case1", () => {
  expect(search([4, 5, 6, 7, 0, 1, 2], 0)).toBe(4);
});

test("case2", () => {
  expect(search([3, 1], 1)).toBe(1);
});

test("case3", () => {
  expect(search([5, 1, 3], 5)).toBe(0);
});

test("case4", () => {
  expect(search([3, 4, 5, 6, 1, 2], 2)).toBe(5);
});
