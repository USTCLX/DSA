import { canFinish } from "./207.课程表";

describe("canFinish", () => {
  test("1", () => {
    expect(canFinish(2, [[1, 0]])).toBe(true);
  });
});
