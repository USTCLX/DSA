describe("right moving operator", () => {
  test("should ", () => {
    const num = 0b1001;
    const result = num >> 1;
    expect(num.toString(2)).toBe("1001");
    expect(result.toString(2)).toBe("100");
  });
});
