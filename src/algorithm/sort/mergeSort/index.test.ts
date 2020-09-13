import mergeSort from "./index";

describe("mergeSort", () => {
  test("[]", () => {
    expect(mergeSort([])).toEqual([]);
  });
  test("[1]", () => {
    expect(mergeSort([1])).toEqual([1]);
  });

  test("[1,2]", () => {
    expect(mergeSort([1, 2])).toEqual([1, 2]);
  });

  test("[3,2,1]", () => {
    expect(mergeSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
  test("[2,1,4,5,3,1]", () => {
    expect(mergeSort([2, 1, 4, 5, 3, 1])).toEqual([1, 1, 2, 3, 4, 5]);
  });
});
