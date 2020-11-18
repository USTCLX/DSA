/*
 * @lc app=leetcode.cn id=112 lang=typescript
 *
 * [112] 路径总和
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

// function calcSum(node: TreeNode | null, sum: number, count: number): boolean {
//   if (!node) return false;

//   count += node.val;
//   if (!node.left && !node.right) {
//     return count === sum;
//   }

//   return calcSum(node.left, sum, count) || calcSum(node.right, sum, count);
// }

// function hasPathSum(root: TreeNode | null, sum: number): boolean {
//   return calcSum(root, sum, 0);
// }

// function hasPathSum(root: TreeNode | null, sum: number): boolean {
//   // 没有根节点，直接false
//   if (!root) return false;

//   // 已经是叶子节点
//   if (!root.left && !root.right) {
//     return root.val === sum;
//   }

//   // 探索左右子树
//   return (
//     hasPathSum(root.left, sum - root.val) ||
//     hasPathSum(root.right, sum - root.val)
//   );
// }

function hasPathSum(root: TreeNode | null, sum: number): boolean {
  if (!root) return false;
  const queue = [root]; // 遍历节点
  const result = [root.val]; // 记录路径和
  while (queue.length) {
    const node = queue.pop();
    const value = result.pop();

    if (!node) continue;

    if (!node.left && !node.right) {
      if (sum === value) {
        return true;
      }
    }
    if (node.left) {
      queue.push(node.left);
      result.push((value as number) + node.left.val);
    }
    if (node.right) {
      queue.push(node.right);
      result.push((value as number) + node.right.val);
    }
  }
  return false;
}
// @lc code=end

export { hasPathSum };
