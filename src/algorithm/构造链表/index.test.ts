import { fromArrToLink } from "./index";

describe("fromArrToLink", () => {
  test("[1,2,3]", () => {
    const arr: number[] = [1, 2, 3];
    const head = fromArrToLink(arr);
    expect(head.stringify()).toBe("[1,2,3]");
  });
});
