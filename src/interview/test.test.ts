import { count } from "./test";
test("should ", () => {
  expect(count([], 0)).toBe(0);
});

test("should 1", () => {
  expect(count([1, 0, 1, 0, 1], 1)).toBe(8);
});

test("should ", () => {
  expect(count([1, 1, 1], 2)).toBe(2);
});

test("should ", () => {
  expect(count([1, 2, 3], 0)).toBe(0);
});

test("should ", () => {
  expect(count([6, 2, 1], 3)).toBe(1);
});

test("should ", () => {
  expect(count([-1, -2, 1, 3], -1)).toBe(2);
});
