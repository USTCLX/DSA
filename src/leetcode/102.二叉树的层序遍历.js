/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];
  const queue = [root];
  const result = [];
  while (queue.length) {
    const length = queue.length;
    const currentVals = [];
    for (let i = 0; i < length; i++) {
      const node = queue.shift();
      currentVals.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(currentVals);
  }

  return result;
};
// @lc code=end
