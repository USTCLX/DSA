import { shortStr } from "./shopee.short";

// elephant-walk  =>  e6t-w2k，

describe("Name of the group", () => {
  test("shortStr", () => {
    expect(shortStr("walk")).toBe("w2k");
  });

  test("2", () => {
    expect(shortStr("elephant")).toBe("e6t");
  });
});
