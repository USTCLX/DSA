import { nextPermutation } from "./31.下一个排列";

test("1 ", () => {
  expect(nextPermutation([1, 3, 2])).toEqual([2, 1, 3]);
});

test("2", () => {
  const arr = [1, 1];
  nextPermutation(arr);
  expect(arr).toEqual([1, 1]);
});
