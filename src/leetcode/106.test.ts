import { buildTree } from "./106.从中序与后序遍历序列构造二叉树";

test("should 1", () => {
  expect(buildTree([2, 3, 1], [3, 2, 1])).toBe(1);
});

test("should 2", () => {
  expect(buildTree([9, 3, 15, 20, 7], [9, 15, 7, 20, 3])).toBe(1);
});

test("should 3", () => {
  expect(buildTree([1, 2, 3], [3, 2, 1])).toBe(3);
});
