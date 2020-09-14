import findKLargest from "./index";

describe("findKLargest", () => {
  test("[3,2,1,5,6,4] ,2", () => {
    expect(findKLargest([3, 2, 1, 5, 6, 4], 2)).toBe(2);
  });
});
