import convertDecimal from "./convertDecimal";
describe("Test convert decimal", () => {
  test("n is 89,base is 2", () => {
    expect(convertDecimal(89, 2)).toBe("1011001");
  });
  test("n is 2013,base is 5", () => {
    expect(convertDecimal(2013, 5)).toBe("31023");
  });
});
