import { calcWeight, calcWeightDP } from "./index";

describe("calcWeight", () => {
  test("calcWeight ", () => {
    expect(calcWeight(9, [2, 2, 4, 6, 3])).toBe(9);
  });
});

describe("calcWeightDP", () => {
  test("calcWeightDP", () => {
    expect(calcWeightDP(9, [2, 2, 4, 6, 3])).toBe(9);
  });
});
