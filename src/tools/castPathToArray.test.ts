import castPathToArray from "./castPathToArray";
const { get, stringToPath } = require("lodash.get");

describe("castPathToArray", () => {
  test("lodash", () => {
    expect(get({ a: { b: 1 } }, "a.b")).toBe(1);
    // expect(get({ a: { b: 1 } }, "a.b.")).toBe(1);
    // expect(get({ a: { b: 1 } }, "a..b")).toBe(1);
    expect(stringToPath("a..b")).toEqual(["a", "", "b"]);
    expect(stringToPath(".a.b")).toEqual(["", "a", "b"]);
    expect(stringToPath("a.b.")).toEqual(["a", "b", ""]);
  });

  test("", () => {
    expect(castPathToArray("a.b.c")).toEqual(["a", "b", "c"]);
    expect(castPathToArray(".a.b")).toEqual(["", "a", "b"]);
    expect(castPathToArray("a.b.")).toEqual(["a", "b", ""]);
    expect(castPathToArray("a..b")).toEqual(["a", "", "b"]);
  });
});
