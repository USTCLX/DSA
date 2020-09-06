import { maxProduct } from "./index";

describe("maxProduct", () => {
  test("[2,3,-2,4] ", () => {
    expect(maxProduct([2, 3, -2, 4])).toBe(6);
  });
});
