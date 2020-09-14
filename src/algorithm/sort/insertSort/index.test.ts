import insertSort from "./index";

describe("inserSort", () => {
  test("[]", () => {
    expect(insertSort([])).toEqual([]);
  });

  test("[1]", () => {
    expect(insertSort([1])).toEqual([1]);
  });

  test("[1,2,3]", () => {
    expect(insertSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("[3,2,1]", () => {
    expect(insertSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  test("[3,2,2,4,1]", () => {
    expect(insertSort([3, 2, 2, 4, 1])).toEqual([1, 2, 2, 3, 4]);
  });
});
