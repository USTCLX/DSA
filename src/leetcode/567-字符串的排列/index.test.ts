import { checkInclusion, checkInclusion2 } from "./index";

describe("checkInclusion", () => {
  test("s1:ab;s2:eidbaooo", () => {
    expect(checkInclusion("ab", "eidbaooo")).toBe(true);
  });

  test("s1:ab;s2:eidboaoo", () => {
    expect(checkInclusion("ab", "eidboaoo")).toBe(false);
  });
});

describe("checkInclusion2", () => {
  test("s1:ab;s2:eidbaooo", () => {
    expect(checkInclusion2("ab", "eidbaooo")).toBe(true);
  });

  test("s1:ab;s2:eidboaoo", () => {
    expect(checkInclusion2("ab", "eidboaoo")).toBe(false);
  });
});
