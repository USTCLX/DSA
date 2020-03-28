import replaceSpace from "./index";

describe("Test of replace space", () => {
  test("[hello world]", () => {
    const data = ["h", "e", "l", "l", "o", " ", "w", "o", "r", "l", "d", " "];
    expect(replaceSpace(data).join("")).toBe("hello%20world%20");
  });
});
