import { addStrings, addStrings2 } from "./index";
describe("addStrings", () => {
  test("12 ,3", () => {
    expect(addStrings("12", "3")).toBe("15");
  });

  test("1,9", () => {
    expect(addStrings("1", "9")).toBe("10");
  });

  test("0,0", () => {
    expect(addStrings("0", "0")).toBe("0");
  });
});

describe("addStrings2", () => {
  test("12 ,3", () => {
    expect(addStrings2("12", "3")).toBe("15");
  });

  test("1,9", () => {
    expect(addStrings2("1", "9")).toBe("10");
  });

  test("0,0", () => {
    expect(addStrings2("0", "0")).toBe("0");
  });
});
