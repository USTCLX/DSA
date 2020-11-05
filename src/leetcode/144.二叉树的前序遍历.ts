/*
 * @lc app=leetcode.cn id=144 lang=typescript
 *
 * [144] 二叉树的前序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

// // 解法1，递归啦
// function preOrder(node: TreeNode | null, res: number[]): void {
//   if (!node) return;
//   res.push(node.val);
//   preOrder(node.left, res);
//   preOrder(node.right, res);
// }

// function preorderTraversal(root: TreeNode | null): number[] {
//   if (!root) return [];

//   const res: number[] = [];
//   preOrder(root, res);

//   return res;
// }

// 解法2
// 迭代，使用一个栈来模拟函数的调用
// function preorderTraversal(root: TreeNode | null): number[] {
//   const stack = [root];
//   const res = [];

//   while (stack.length) {
//     const node = stack.pop();
//     if (node) {
//       res.push(node.val);
//       if (node.right) stack.push(node.right);
//       if (node.left) stack.push(node.left);
//     }
//   }

//   return res;
// }

// 解法3
// 还是迭代啦，一种更好的迭代？

function preorderTraversal(root: TreeNode | null): number[] {
  if (!root) return [];
  const res: number[] = [];

  const stack = [root];

  while (stack.length) {
    let node: any = stack.pop();
    while (node) {
      res.push(node.val);
      stack.push(node.right);
      node = node.left;
    }
  }

  return res;
}
// @lc code=end
