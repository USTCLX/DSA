import { spiralOrder } from "./54.螺旋矩阵";

describe("spiralOrder", () => {
  test("[[1, 2, 3],[4, 5, 6],[7, 8, 9]]", () => {
    const input = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];

    expect(spiralOrder(input)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  test("[[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]]", () => {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];

    expect(spiralOrder(input)).toEqual([
      1,
      2,
      3,
      4,
      8,
      12,
      16,
      15,
      14,
      13,
      9,
      5,
      6,
      7,
      11,
      10
    ]);
  });

  test("[[1,2,3,4],[5,6,7,8],[9,10,11,12]]", () => {
    const input = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12]
    ];
    expect(spiralOrder(input)).toEqual([1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]);
  });
});
