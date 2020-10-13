import { trap } from "./42.接雨水";

describe("trap", () => {
  test("[0,1,0,2,1,0,1,3,2,1,2,1]", () => {
    expect(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1])).toBe(6);
  });
});
