import { findCircleNum } from "./index";

describe("Name of the group", () => {
  test("[[1,1,0],[1,1,0],[0,0,1]]", () => {
    expect(
      findCircleNum([
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1]
      ])
    ).toBe(2);
  });

  test("[[1,0,0,1],[0,1,1,0],[0,1,1,1],[1,0,1,1]]", () => {
    expect(
      // 0-3；1-2；2-3
      findCircleNum([
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 1, 1],
        [1, 0, 1, 1]
      ])
    ).toBe(1);
  });
});
