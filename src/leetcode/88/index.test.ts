import { mergeTwoArr } from "./index";

describe("mergeTwoArr", () => {
  test("nums1 = [1,2,3,0,0,0],nums2 = [2,5,6] ", () => {
    expect(mergeTwoArr([1, 2, 3], [2, 5, 6])).toEqual([1, 2, 2, 3, 5, 6]);
  });
});
