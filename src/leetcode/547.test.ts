import { findCircleNum } from "./547.朋友圈";

describe("findCircleNum", () => {
  test("1 ", () => {
    expect(
      findCircleNum([
        [1, 1, 0],
        [1, 1, 0],
        [0, 0, 1]
      ])
    ).toBe(2);
  });

  test("2", () => {
    expect(
      findCircleNum([
        [1, 0, 0, 1],
        [0, 1, 1, 0],
        [0, 1, 1, 1],
        [1, 0, 1, 1]
      ])
    ).toBe(1);
  });
});

/**
  a  b  c  d 
a 1, 0, 0, 1
b 0, 1, 1, 0
c 0, 1, 1, 1
d 1, 0, 1, 1

输出
a->d->c->b
 */
