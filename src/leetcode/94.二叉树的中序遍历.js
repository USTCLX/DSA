/*
 * @lc app=leetcode.cn id=94 lang=javascript
 *
 * [94] 二叉树的中序遍历
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
  if (!root) return [];

  const stack = [];
  const res = [];
  while (stack.length || root) {
    while (root) {
      stack.push(root);
      root = root.left;
    }
    const curNode = stack.pop();
    res.push(curNode.val);

    root = curNode.right;
  }

  return res;
};
// @lc code=end
