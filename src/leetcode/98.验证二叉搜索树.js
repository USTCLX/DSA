/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
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
};
// @lc code=end
