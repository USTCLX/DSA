/*
 * @lc app=leetcode.cn id=106 lang=typescript
 *
 * [106] 从中序与后序遍历序列构造二叉树
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
// 1. 后序遍历的最后一个元素就是树的根节点
// 2. 用根节点切分中序遍历，左边是根节点的左子树，右边是根节点的右子树
// 3. 根据左子树的数量，从头开始切分出左子树的后序遍历。跟着的是右子树的后序遍历（注意不包含最后一个元素-根节点）
function buildTree(inorder: number[], postorder: number[]): TreeNode | null {
  if (!inorder.length || !postorder.length) return null;
  if (inorder.length !== postorder.length) throw new Error("error");

  if (
    inorder.length === 1 &&
    postorder.length === 1 &&
    inorder[0] === postorder[0]
  ) {
    return new TreeNode(inorder[0]);
  }

  const rootVal = postorder[postorder.length - 1];
  const rootInorderIndex = inorder.indexOf(rootVal);
  const root = new TreeNode(rootVal);

  const leftInorder = inorder.slice(0, rootInorderIndex);
  // 后序遍历子数组的个数与先序遍历相同
  // 9,5,3,15,20,7
  // 5,9,15,7,20,3
  // 3是根节点
  // 9,5 是中序遍历左子树
  // 那么5,9是后序遍历的右子树
  const leftPostorder = postorder.slice(0, rootInorderIndex);

  const rightInorder = inorder.slice(rootInorderIndex + 1);
  const rightPostorder = postorder.slice(
    rootInorderIndex,
    postorder.length - 1
  );

  root.left = buildTree(leftInorder, leftPostorder);
  root.right = buildTree(rightInorder, rightPostorder);
  return root;
}
// @lc code=end

export { buildTree };
