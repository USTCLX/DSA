import { decodeString } from "./394.字符串解码";

describe("1", () => {
  test("should ", () => {
    expect(decodeString("3[a]2[bc]")).toBe("aaabcbc");
  });

  test("2", () => {
    expect(decodeString("3[a2[c]]")).toBe("accaccacc");
  });
});
