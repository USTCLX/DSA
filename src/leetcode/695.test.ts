import { maxAreaOfIsland } from "./695.岛屿的最大面积";

test("should ", () => {
  expect(
    maxAreaOfIsland([
      [1, 1, 0, 0, 0],
      [1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1],
      [0, 0, 0, 1, 1]
    ])
  ).toBe(4);
});
