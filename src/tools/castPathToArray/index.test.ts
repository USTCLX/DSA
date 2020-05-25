import castPathToArray from "./index";

describe("castPathToArray", () => {
  test("", () => {
    expect(castPathToArray("a.b.c")).toEqual(["a", "b", "c"]);
    expect(castPathToArray(".a.b")).toEqual(["", "a", "b"]);
    expect(castPathToArray("a.b.")).toEqual(["a", "b", ""]);
    expect(castPathToArray("a..b")).toEqual(["a", "", "b"]);
  });
});
