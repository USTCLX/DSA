import { compare } from "./index";

describe("compare", () => {
  test("('#container > .element', 'body > .element'", () => {
    expect(compare("#container > .element", "body > .element")).toBe(990);
  });
  test("'body', '.element'", () => {
    expect(compare("body", ".element")).toBe(-90);
  });

  test("'.element + .element::last-child', '.element:hover'", () => {
    expect(compare(".element + .element::last-child", ".element:hover")).toBe(
      10
    );
  });

  test("'input[type=text]', 'li:hover'", () => {
    expect(compare("input[type=text]", "li:hover")).toBe(0);
  });
});
