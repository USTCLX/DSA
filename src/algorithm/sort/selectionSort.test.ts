import selectionSort from "./selectionSort";
describe("Test selection sort", () => {
  test("[3,2,1]", () => {
    expect(selectionSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
  test("[1,2,2,7,3]", () => {
    expect(selectionSort([1, 2, 2, 7, 3])).toEqual([1, 2, 2, 3, 7]);
  });
  test("[]", () => {
    expect(selectionSort([])).toEqual([]);
  });
  test("[1,1,1]", () => {
    expect(selectionSort([1, 1, 1])).toEqual([1, 1, 1]);
  });
});
