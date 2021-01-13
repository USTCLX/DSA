/*
 * @lc app=leetcode.cn id=105 lang=typescript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  if (!preorder.length && !inorder.length) {
    return null;
  }

  if (preorder.length === 1 && inorder.length === 1) {
    return new TreeNode(preorder[0]);
  }

  const rootVal = preorder[0];
  const rootIndex = inorder.indexOf(rootVal);

  const leftInorder = inorder.slice(0, rootIndex);
  const leftPreorder = preorder.slice(1, rootIndex + 1);
  const rightInorder = inorder.slice(rootIndex + 1);
  const rightPreorder = preorder.slice(rootIndex + 1);

  const root = new TreeNode(rootVal);
  root.left = buildTree(leftPreorder, leftInorder);
  root.right = buildTree(rightPreorder, rightInorder);

  return root;
}
// @lc code=end
