import quickSort from "./index";

describe("quickSort", () => {
  test("[]", () => {
    expect(quickSort([])).toEqual([]);
  });
  test("[1]", () => {
    expect(quickSort([1])).toEqual([1]);
  });

  test("[1,2]", () => {
    expect(quickSort([1, 2])).toEqual([1, 2]);
  });

  test("[3,2,1]", () => {
    expect(quickSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
  test("[2,1,4,5,3,1]", () => {
    expect(quickSort([2, 1, 4, 5, 3, 1])).toEqual([1, 1, 2, 3, 4, 5]);
  });
});
