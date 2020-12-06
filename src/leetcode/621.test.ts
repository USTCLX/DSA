import { leastInterval } from "./621.任务调度器";

describe("leastInterval", () => {
  test("should ", () => {
    expect(leastInterval(["A", "A", "A", "B", "B", "B"], 2)).toBe(8);
  });

  test('["A","A","A","A","A","A","B","C","D","E","F","G"]', () => {
    expect(
      leastInterval(
        ["A", "A", "A", "A", "A", "A", "B", "C", "D", "E", "F", "G"],
        2
      )
    ).toBe(16);
  });

  test('["A","A","A","B","B","B", "C","C","C", "D", "D", "E"]', () => {
    expect(
      leastInterval(
        ["A", "A", "A", "B", "B", "B", "C", "C", "C", "D", "D", "E"],
        2
      )
    ).toBe(12);
  });
});
