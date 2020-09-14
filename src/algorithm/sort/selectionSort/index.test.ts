import selectionSort from "./index";

describe("selectionSort", () => {
  test("[]", () => {
    expect(selectionSort([])).toEqual([]);
  });

  test("[1]", () => {
    expect(selectionSort([1])).toEqual([1]);
  });

  test("[1,2,3]", () => {
    expect(selectionSort([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test("[3,2,1]", () => {
    expect(selectionSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  test("[3,2,2,4,1]", () => {
    expect(selectionSort([3, 2, 2, 4, 1])).toEqual([1, 2, 2, 3, 4]);
  });
});
