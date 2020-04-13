import Queue from "./two_stack";

describe("Queue", () => {
  test("should ", () => {
    const q = new Queue();
    q.appendTail(1);
    expect(q.deleteHead()).toBe(1);

    q.appendTail(1);
    q.appendTail(2);
    expect(q.deleteHead()).toBe(1);

    q.appendTail(3);
    expect(q.deleteHead()).toBe(2);
    expect(q.deleteHead()).toBe(3);
    expect(q.deleteHead()).toBe(undefined);

    q.appendTail(4);
    expect(q.deleteHead()).toBe(4);
  });
});
