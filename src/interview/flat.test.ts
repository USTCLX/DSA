import { flat } from "./flat";

test("1", () => {
  expect(flat([])).toEqual([]);
});

test("2", () => {
  expect(flat([1, 2, 3, [4, 5, [6, 7]]])).toEqual([1, 2, 3, 4, 5, 6, 7]);
});
