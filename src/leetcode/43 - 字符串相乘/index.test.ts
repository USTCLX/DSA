import { multiply } from "./index";

describe("multiply", () => {
  test("2,3", () => {
    expect(multiply("2", "3")).toBe("6");
  });
  test("498828660196 840477629533", () => {
    expect(multiply("498828660196", "840477629533")).toBe("6");
  });
});
