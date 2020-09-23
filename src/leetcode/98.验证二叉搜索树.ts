/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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
// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

// 通过限制当前val的范围来判断，在递归调查子树的时候，不停的缩小范围
// 这个还真是挺难想到的
// function isValidBSTByRange(root: TreeNode, low: number, high: number): boolean {
//   if (root == null) return true;

//   if (root.val > low && root.val < high) {
//     return (
//       isValidBSTByRange(root.left, low, root.val) &&
//       isValidBSTByRange(root.right, root.val, high)
//     );
//   } else {
//     return false;
//   }
// }

// 中序遍历
// function inOrderBST(root: any, res: number[]): void {
//   const stack = [];

//   while (stack.length !== 0 || root != null) {
//     // 左结点全部入栈
//     while (root != null) {
//       stack.push(root);
//       root = root.left;
//     }
//     // 取出当前节点
//     const node = stack.pop();
//     // 访问
//     res.push(node.val);
//     // 访问当前节点的右节点
//     root = node.right;
//   }
// }

// 根结点的val应该大于 left子树的所有val，而不是left child的val
function isValidBST(root: TreeNode | null): boolean {
  const stack = [];
  let preValue = -Infinity;
  while (stack.length !== 0 || root != null) {
    // 左结点全部入栈
    while (root != null) {
      stack.push(root);
      root = root.left;
    }
    // 取出当前节点
    const node = stack.pop();
    // 访问
    const curValue = node.val != null ? node.val : -Infinity;
    if (preValue >= curValue) {
      return false;
    }
    preValue = curValue;
    // 访问当前节点的右节点
    root = node.right;
  }
  return true;
}
// @lc code=end
