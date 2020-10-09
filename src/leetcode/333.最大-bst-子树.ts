/*
 * @lc app=leetcode.cn id=333 lang=typescript
 *
 * [333] 最大 BST 子树
 */

class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

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

class Result {
  node: TreeNode | null;
  size: number;
  max: number;
  min: number;
  constructor(
    node: TreeNode | null = null,
    size: number = 0,
    min: number = Infinity,
    max: number = 0
  ) {
    this.node = node;
    this.size = size;
    this.min = min;
    this.max = max;
  }
}

// 这里找左右子树的bst，只有子树存在，最差也有一个，因为一个节点本身就是一个bst
function find(root: TreeNode | null): Result | null {
  if (root === null) {
    return new Result(null, 0);
  }

  const lResult = root.left ? find(root.left) : null;
  const rResult = root.right ? find(root.right) : null;

  const lValid =
    lResult === null || (lResult.node === root.left && lResult.max < root.val);
  const rValid =
    rResult === null || (rResult.node === root.right && rResult.min > root.val);

  // 左右子树都有效，组成新的bst
  if (lValid && rValid) {
    const node = root;
    const size =
      (lResult === null ? 0 : lResult.size) +
      (rResult === null ? 0 : rResult.size) +
      1;
    const min = lResult == null ? root.val : lResult.min;
    const max = rResult == null ? root.val : rResult.max;
    return new Result(node, size, min, max);
  }

  // 左右子树都存在，取较大的结果
  if (lResult && rResult) {
    return lResult.size > rResult.size ? lResult : rResult;
  } else if (lResult) {
    return lResult;
  } else if (rResult) {
    return rResult;
  }

  return null;
}

function largestBSTSubtree(root: TreeNode | null): number {
  const result = find(root);
  return result ? result.size : 0;
}
// @lc code=end
