import Priority from "./index";
describe("Test of priorityQueue", () => {
  test("should ", () => {
    const priority = new Priority();
    priority.add(1);
    priority.add(2);
    expect(priority.max()).toBe(2);
    expect(priority.delMax()).toBe(2);
    expect(priority.max()).toBe(1);
    priority.add(3);
    priority.add(7);
    priority.add(4);
    priority.add(2);
    expect(priority.max()).toBe(7);
    expect(priority.delMax()).toBe(7);
    expect(priority.delMax()).toBe(4);
    expect(priority.delMax()).toBe(3);
  });
});
