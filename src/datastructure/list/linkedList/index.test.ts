import LinkedList from "./index";

describe("constructor", () => {
  test("push size toString", () => {
    const list = new LinkedList<number>();
    list.push(1);
    list.push(2);
    expect(list.size()).toBe(2);
    expect(list.toString()).toBe("1,2");
  });
});

describe("insert", () => {
  test("insert head to a empty list", () => {
    const list = new LinkedList<number>();
    list.insert(1, 0);
    expect(list.toString()).toBe("1");
  });
  test("insert head to a not empty list", () => {
    const list = new LinkedList<number>();
    list.push(1);
    list.insert(0, 0);
    expect(list.size()).toBe(2);
    expect(list.toString()).toBe("0,1");
  });

  test("insert tail to a not empty list", () => {
    const list = new LinkedList<number>();
    list.push(1);
    list.push(2);
    list.insert(1, 1);
    expect(list.size()).toBe(3);
    expect(list.toString()).toBe("1,1,2");
  });
});

describe("removeAt", () => {
  test("removeAt head in a empty list", () => {
    const list = new LinkedList<number>();
    expect(list.remove(0)).toBe(false);
    expect(list.remove(4)).toBe(false);
  });

  test("removeAt head in a not empty list", () => {
    const list = new LinkedList<number>();
    list.push(0);
    list.push(1);
    expect(list.removeAt(0)).toBe(0);
    expect(list.size()).toBe(1);
  });

  test("removeAt a element in a not empty list", () => {
    const list = new LinkedList<string>();
    list.push("a");
    list.push("b");
    list.push("c");
    expect(list.removeAt(1)).toBe("b");
    expect(list.size()).toBe(2);
  });
});

describe("remove", () => {
  test("remove head in a empty list ", () => {
    const list = new LinkedList<string>();
    expect(list.remove("1")).toBe(false);
  });
  test("remove head in a not empty list ", () => {
    const list = new LinkedList<string>();
    list.push("a");
    list.push("b");
    list.push("c");
    expect(list.remove("b")).toBe(true);
    expect(list.size()).toBe(2);
  });
});

describe("indexOf", () => {
  test("indexOf in a not empty list", () => {
    const list = new LinkedList<string>();
    list.push("a");
    list.push("b");
    list.push("c");
    expect(list.indexOf("a")).toBe(0);
    expect(list.indexOf("c")).toBe(2);
  });
  test("indexof in a empty list", () => {
    const list = new LinkedList<string>();
    expect(list.indexOf("a")).toBe(-1);
  });
});
