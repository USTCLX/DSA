/*
 * @lc app=leetcode.cn id=103 lang=typescript
 *
 * [103] 二叉树的锯齿形层次遍历
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

// function zigzagLevelOrder(root: TreeNode | null): number[][] {
//   if (!root) return [];

//   const queue = [root];
//   const result = [];
//   let order = true;
//   while (queue.length) {
//     const length = queue.length;
//     const current = [];
//     for (let i = 0; i < length; i++) {
//       const node = queue.shift();
//       if (!node) continue;
//       if (order) {
//         current.push(node.val);
//       } else {
//         current.unshift(node.val);
//       }

//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);
//     }
//     order = !order;
//     result.push(current);
//   }
//   return result;
// }

function dfs(node: TreeNode | null, level: number, result: number[][]) {
  if (!node) return;
  if (level >= result.length) {
    result[level] = [node.val];
  } else if (level % 2 === 0) {
    // 偶数层，正序
    result[level].push(node.val);
  } else {
    // 奇数层，逆序
    result[level].unshift(node.val);
  }

  if (node.left) dfs(node.left, level + 1, result);
  if (node.right) dfs(node.right, level + 1, result);
}

function zigzagLevelOrder(root: TreeNode | null): number[][] {
  if (!root) return [];

  const result: number[][] = [];

  dfs(root, 0, result);

  return result;
}
// @lc code=end
