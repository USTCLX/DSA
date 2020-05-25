import { threeNumSum } from "./index";

describe("threeNumSum", () => {
  test("[-1, 0, 1, 2, -1, -4] ", () => {
    const res = threeNumSum([-1, 0, 1, 2, -1, -4]);
    expect(res).toEqual(
      expect.arrayContaining([
        [-1, 0, 1],
        [-1, -1, 2]
      ])
    );
  });
});
