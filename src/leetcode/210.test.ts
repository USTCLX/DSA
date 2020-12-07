import { findOrder } from "./210.课程表-ii";

describe("findOrder", () => {
  test("1", () => {
    expect(findOrder(2, [[1, 0]])).toEqual([0, 1]);
  });
});
