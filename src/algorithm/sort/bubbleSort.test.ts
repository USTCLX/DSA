import bubbleSort from "./bubbleSort";

describe("Test bubble sort", () => {
  test("should sort", () => {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  test.each([
    [[], []],
    [[1], [1]],
    [
      [7, 2, 3, 4, 1, 2, 8, 7],
      [1, 2, 2, 3, 4, 7, 7, 8]
    ],
    [
      [3, 2, 1, 4, 5, 6, 7, 8, 9, 10],
      [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    ]
  ])("bubbleSort(%d)", (input, expected) => {
    console.log("input", input, expected);
    expect(bubbleSort(input)).toEqual(expected);
  });
});
