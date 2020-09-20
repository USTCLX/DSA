import { threeNumSum, threeSum1, threeSum2 } from "./index";

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

describe("threeSum1", () => {
  test("[0,0,0,0,0]", () => {
    expect(threeSum1([0, 0, 0, 0, 0, 0])).toEqual(
      expect.arrayContaining([[0, 0, 0]])
    );
  });

  test("[-1, 0, 1, 2, -1, -4]", () => {
    expect(threeSum1([-1, 0, 1, 2, -1, -4])).toEqual(
      expect.arrayContaining([
        [-1, 0, 1],
        [-1, -1, 2]
      ])
    );
  });

  test("[1,-1,-1,0]", () => {
    expect(threeSum1([1, -1, -1, 0])).toEqual(
      expect.arrayContaining([[-1, 0, 1]])
    );
  });

  test("[-1,0,1,0]", () => {
    expect(threeSum1([-1, 0, 1, 0])).toMatchObject([[-1, 0, 1]]);
  });
});

describe("threeSum2", () => {
  test("[0,0,0,0,0]", () => {
    expect(threeSum2([0, 0, 0, 0, 0, 0])).toEqual(
      expect.arrayContaining([[0, 0, 0]])
    );
  });

  test("[-1, 0, 1, 2, -1, -4]", () => {
    expect(threeSum2([-1, 0, 1, 2, -1, -4])).toEqual(
      expect.arrayContaining([
        [-1, 0, 1],
        [-1, -1, 2]
      ])
    );
  });
});
