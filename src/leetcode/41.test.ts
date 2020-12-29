import { firstMissingPositive } from "./41.缺失的第一个正数";

describe("firstMissingPositive", () => {
  test("[1,2,0]", () => {
    expect(firstMissingPositive([1, 2, 0])).toBe(3);
  });
  test("[3,4,-1,1]", () => {
    expect(firstMissingPositive([3, 4, -1, 1])).toBe(2);
  });
  test("[7,8,9,11,12]", () => {
    expect(firstMissingPositive([7, 8, 9, 11, 12])).toBe(1);
  });

  test("[1]", () => {
    expect(firstMissingPositive([1])).toBe(2);
  });
  test("[0,2,2,1,1]", () => {
    expect(firstMissingPositive([0, 2, 2, 1, 1])).toBe(3);
  });
});
