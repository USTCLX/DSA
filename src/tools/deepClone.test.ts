import deepClone from "./deepClone";

describe("Test of deep clone", () => {
  test("null", () => {
    expect(deepClone(null)).toBe(null);
  });
  test("undefined", () => {
    expect(deepClone(undefined)).toBe(undefined);
  });
  test("0", () => {
    expect(deepClone(0)).toBe(0);
    expect(deepClone("0")).toBe("0");
  });
  test("string", () => {
    expect(deepClone("string")).toBe("string");
  });
  test("[1,2,3]", () => {
    const obj = [1, 2, 3];
    const copy = deepClone(obj);
    expect(obj).toEqual(copy);
    expect(obj === copy).toBe(false);
  });
  test("{a:1,b:2,c:3}", () => {
    const obj = { a: 1, b: 2, c: 3 };
    const copy = deepClone(obj);
    expect(deepClone(obj)).toEqual(copy);
    expect(obj === copy).toBe(false);
  });
  test("[{a:1},{b:2}]", () => {
    const obj = [{ a: 1 }, { b: 2 }];
    const copy = deepClone(obj);
    expect(obj).toEqual(copy);
    expect(obj === copy).toBe(false);
  });
  test("{a:{a1:1},b:{b1:2},fuc:function(){}}", () => {
    const obj = { a: { a1: 1 }, b: { b1: 2 }, fuc: function() {} };
    const copy = deepClone(obj);
    expect(obj).toEqual(copy);
    expect(obj === copy).toBe(false);
    expect(obj.a === copy.a).toBe(false);
    expect(obj.b === copy.b).toBe(false);
  });
});
