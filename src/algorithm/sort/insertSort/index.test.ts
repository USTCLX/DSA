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

describe("1", () => {
  test("should ", () => {
    let i = 5;
    for (; i >= 0; i--) {
      break;
    }
    expect(i).toBe(4);
  });
});
