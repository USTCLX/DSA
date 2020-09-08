import bubbleSort from "./index";

describe("bubbleSort", () => {
  test("[]", () => {
    const n = [];
    bubbleSort(n);
    expect(n).toEqual([]);
  });
  test("[1,2]", () => {
    const n = [1, 2];
    bubbleSort(n);
    expect(n).toEqual([1, 2]);
  });
  test("[3,2,1]", () => {
    const n = [1, 2, 3];
    bubbleSort(n);
    expect(n).toEqual([1, 2, 3]);
  });
  test("[1,3,4,2]", () => {
    const n = [1, 3, 4, 2];
    bubbleSort(n);
    expect(n).toEqual([1, 2, 3, 4]);
  });
  test("[1,1,2,1]", () => {
    const n = [1, 1, 2, 1];
    bubbleSort(n);
    expect(n).toEqual([1, 1, 1, 2]);
  });
});
