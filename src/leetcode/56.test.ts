import { merge } from "./56.合并区间";

test("1", () => {
  expect(
    merge([
      [1, 3],
      [2, 6],
      [8, 10],
      [15, 18]
    ])
  ).toEqual([
    [1, 6],
    [8, 10],
    [15, 18]
  ]);
});
