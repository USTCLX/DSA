import minStack from "./minStack";

describe("Test of minStack", () => {
  test("case 1", async () => {
    const stack = new minStack();
    stack.push();
    stack.push(2);
    stack.push(0);
    stack.push(3);
    expect(stack.getMin()).toBe(0);
    stack.pop();
    expect(stack.getMin()).toBe(0);
    stack.pop();
    expect(stack.getMin()).toBe(2);
  });
});
