 /*
 * @lc app=leetcode.cn id=94 lang=typescript
 *
 * [94] 二叉树的中序遍历
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

// // 递归啦
// function inOrder(node: TreeNode | null, res: number[]): void {
//   if (!node) return;
//   inOrder(node.left, res);
//   res.push(node.val);
//   inOrder(node.right, res);
// }
// function inorderTraversal(root: TreeNode | null): number[] {
//   const res: number[] = [];
//   inOrder(root, res);
//   return res;
// }

// 迭代啦
function inorderTraversal(root: TreeNode | null): number[] {
  const res: number[] = [];

  const stack = [];

  while (stack.length || root) {
    while (root) {
      // 往栈中添加左孩子
      stack.push(root);
      root = root.left;
    }
    const node: any = stack.pop();

    // 访问值
    res.push(node.val);

    // 访问右孩子
    root = node.right;
  }

  return res;
}
// @lc code=end

export { inorderTraversal };
