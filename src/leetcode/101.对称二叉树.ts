/*
 * @lc app=leetcode.cn id=101 lang=typescript
 *
 * [101] 对称二叉树
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

// function isSymmetric(root: TreeNode | null): boolean {
//   if (!root) return true;
//   const queue = [root, root];

//   while (queue.length) {
//     const p = queue.shift();
//     const q = queue.shift();

//     if (p == null && q == null) {
//       continue;
//     }

//     if (!p || !q) {
//       return false;
//     }

//     if (p.val !== q.val) {
//       return false;
//     }

//     queue.push(p.left, q.right);
//     queue.push(p.right, q.left);
//   }

//   return true;
// }

function helper(p: TreeNode | null, q: TreeNode | null): boolean {
  if (!p && !q) return true;
  if (!p || !q) return false;

  return p.val === q.val && helper(p.left, q.right) && helper(p.right, q.left);
}

function isSymmetric(root: TreeNode | null): boolean {
  return helper(root, root);
}
// @lc code=end
