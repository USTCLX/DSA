import converToLegal from "./index";

test("helloo to hello", () => {
  expect(converToLegal("helloo")).toBe("hello");
});

test("wooow", () => {
  expect(converToLegal("wooow")).toBe("woow");
});

test("empty", () => {
  expect(converToLegal("")).toBe("");
});

test("abcked", () => {
  expect(converToLegal("abcked")).toBe("abcked");
});
