import findMatrix from "./index";

const matrix = [
  [1, 2, 8, 9],
  [2, 4, 9, 12],
  [4, 7, 10, 13],
  [6, 8, 11, 15]
];

describe("Test of find matrix", () => {
  test("7 ", () => {
    expect(findMatrix(matrix, 7)).toBe(true);
  });
  test("3", () => {
    expect(findMatrix(matrix, 3)).toBe(false);
  });
});
