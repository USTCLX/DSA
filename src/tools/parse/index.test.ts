import { parse } from "./index";

test("1", () => {
  expect(parse({ li: { name: "test" } }, "li.name")).toBe("test");
});
