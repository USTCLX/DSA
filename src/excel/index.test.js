import { main } from "./index";

describe("main", () => {
  test("should ", () => {
    const strs = ["AA01 = 20 + AB00", "AA00 = 10", "AB00 = (AA00 + AA01) * 15"];
    expect(main(strs)).toBe(false);
  });

  test("2", () => {
    const strs = ["AA00 = 10", "AA01 = AA00 + AB00", "AB00 = 15"];
    expect(main(strs)).toBe(true);
  });

  test("3", () => {
    const strs = ["AA00 = AB01 * 10"];
    expect(main(strs)).toBe(false);
  });

  test("4", () => {
    const strs = ["AA00 = AB01", "AB01 = AA00"];
    expect(main(strs)).toBe(false);
  });
});
