/*
 * @lc app=leetcode.cn id=102 lang=typescript
 *
 * [102] 二叉树的层序遍历
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

// function levelOrder(root: TreeNode | null): number[][] {
//   if (!root) return [];

//   const result = [];
//   const queue = [];
//   queue.push(root);
//   while (queue.length) {
//     const len = queue.length;
//     const ans = [];
//     for (let i = 0; i < len; i++) {
//       const node = queue.shift();
//       ans.push(node!.val);

//       if (node!.left) queue.push(node!.left);
//       if (node!.right) queue.push(node!.right);
//     }
//     result.push(ans);
//   }
//   return result;
// }

function dfs(node: TreeNode | null, level: number, result: number[][]) {
  if (!node) return;

  if (result[level] == null) {
    result[level] = [node.val];
  } else {
    result[level].push(node.val);
  }

  dfs(node.left, level + 1, result);
  dfs(node.right, level + 1, result);
}

function levelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];
  const result: number[][] = [];
  dfs(root, 0, result);
  return result;
}
// @lc code=end
