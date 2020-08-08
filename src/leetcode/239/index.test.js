import { maxSlidingWindow } from "./index";

describe("Name of the group", () => {
  test("[1, 3, 1, 2, 0, 5], 3", () => {
    expect(maxSlidingWindow([1, 3, 1, 2, 0, 5], 3)).toEqual([3, 3, 2, 5]);
  });
});
