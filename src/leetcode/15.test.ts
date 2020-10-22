import { threeSum } from "./15.三数之和";

describe("Name of the group", () => {
  test("[-1,0,1,2,-1,-4]", () => {
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toMatchObject(
      expect.arrayContaining([
        [-1, 0, 1],
        [-1, 2, -1]
      ])
    );
  });
});
