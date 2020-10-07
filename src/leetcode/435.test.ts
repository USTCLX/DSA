import { eraseOverlapIntervals } from "./435.无重叠区间";

describe("eraseOverlapIntervals", () => {
  test("[[1,100],[11,22],[1,11],[2,12]]", () => {
    expect(
      eraseOverlapIntervals([
        [1, 100],
        [11, 22],
        [1, 11],
        [2, 12]
      ])
    ).toBe(2);
  });
});
