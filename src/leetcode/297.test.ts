import {
  serialize,
  deserialize,
  TreeNode
} from "./297.二叉树的序列化与反序列化";

describe("serialize", () => {
  test("[1,2] ", () => {
    const root = new TreeNode(1);
    root.left = new TreeNode(2);
    expect(serialize(root)).toBe("[1,2]");
  });
});

describe("deserialize", () => {
  test("[1,2]", () => {
    const root = deserialize("[1,2]");
    expect(root.val).toBe("1");
    expect(root.left.val).toBe("2");
    expect(root.right).toEqual(null);
  });
});
