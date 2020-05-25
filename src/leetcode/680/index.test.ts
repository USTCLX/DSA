import { isPalidromeByCutOneChar } from "./index";

describe("isPalidromeByCutOneChar", () => {
  test("abca", () => {
    expect(isPalidromeByCutOneChar("abca")).toBe(true);
  });

  test("abbca", () => {
    expect(isPalidromeByCutOneChar("abbca")).toBe(true);
  });

  test("aba", () => {
    expect(isPalidromeByCutOneChar("abbca")).toBe(true);
  });

  test("abbcea", () => {
    expect(isPalidromeByCutOneChar("abbcea")).toBe(false);
  });
});
