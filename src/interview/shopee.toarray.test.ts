// console.log("keke", toArray("[1, 2, 3, [4, 5, [6,7,8, [9,10]]]]"));
import { toArray } from "./shopee.toarray";

describe("test", () => {
  test("1", () => {
    expect(toArray("[1, 2, 3, [4, 5, [6,7,8, [9,10]]]]")).toEqual([
      1,
      2,
      3,
      [4, 5, [6, 7, 8, [9, 10]]]
    ]);
  });
  test("2", () => {
    expect(toArray("[1,2,3,[4,5],6,17]")).toEqual([1, 2, 3, [4, 5], 6, 17]);
  });
});
