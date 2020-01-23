import binSearch from "./binSearchC";
describe("Test bin search c ", () => {
  test.each([
    [[1, 2, 2, 3], 2, 2],
    [[1, 3, 4], 2, 0],
    [[1, 3, 4], 3, 1],
    [[1, 2, 3], 0, -1]
  ])("should return right index", (arr, e, expected) => {
    expect(binSearch(arr, e, 0, arr.length)).toBe(expected);
  });
});
