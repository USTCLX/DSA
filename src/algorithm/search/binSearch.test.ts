import binSearch from "./binSearch";

describe("binSearch", () => {
  test.each([
    [[2, 4, 5, 7, 8, 9, 12], 8, 4],
    [[2, 4, 5, 7, 8, 9, 12], 3, -1]
  ])("binSearch", (array: Array<number>, target: number, expected: number) => {
    expect(binSearch(array, target)).toBe(expected);
  });
});
