/*
 * @lc app=leetcode.cn id=98 lang=typescript
 *
 * [98] 验证二叉搜索树
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
// class TreeNode {
//   val: number;
//   left: TreeNode | null;
//   right: TreeNode | null;
//   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
//     this.val = val === undefined ? 0 : val;
//     this.left = left === undefined ? null : left;
//     this.right = right === undefined ? null : right;
//   }
// }

// 通过限制当前val的范围来判断，在递归调查子树的时候，不停的缩小范围
// 这个还真是挺难想到的
// function isValidBSTByRange(root: TreeNode, low: number, high: number): boolean {
//   if (root == null) return true;

//   if (root.val > low && root.val < high) {
//     return (
//       isValidBSTByRange(root.left, low, root.val) &&
//       isValidBSTByRange(root.right, root.val, high)
//     );
//   } else {
//     return false;
//   }
// }

// 中序遍历
// function inOrderBST(root: any, res: number[]): void {
//   const stack = [];

//   while (stack.length !== 0 || root != null) {
//     // 左结点全部入栈
//     while (root != null) {
//       stack.push(root);
//       root = root.left;
//     }
//     // 取出当前节点
//     const node = stack.pop();
//     // 访问
//     res.push(node.val);
//     // 访问当前节点的右节点
//     root = node.right;
//   }
// }

// 根结点的val应该大于 left子树的所有val，而不是left child的val
// 本质上也是中序遍历
// function isValidBST(root: TreeNode | null): boolean {
//   const stack = [];
//   let preValue = -Infinity;
//   while (stack.length !== 0 || root != null) {
//     // 左结点全部入栈
//     while (root != null) {
//       stack.push(root);
//       root = root.left;
//     }
//     // 取出当前节点
//     const node = stack.pop();
//     // 访问
//     const curValue = node.val != null ? node.val : -Infinity;
//     if (preValue >= curValue) {
//       return false;
//     }
//     preValue = curValue;
//     // 访问当前节点的右节点
//     root = node.right;
//   }
//   return true;
// }

// 第二次做这个题目，不看原代码，竟然都想不起来了。惭愧啊

// 迭代版本的中序遍历
// function isValidBST(root: TreeNode | null): boolean {
//   const stack: any[] = [];

//   let preVal = -Infinity;
//   // ❗️这里需要注意，需要判断length 以及 root
//   while (stack.length !== 0 || root !== null) {
//     // 不停的追加左节点
//     while (root) {
//       stack.push(root);
//       root = root.left;
//     }

//     //取出最新的节点,并访问
//     const node = stack.pop();
//     // ❗️这里需要注意，需要判断当前节点的值是否存在
//     let curVal = node.val !== null ? node.val : -Infinity;
//     if (curVal <= preVal) {
//       return false;
//     }
//     preVal = curVal;
//     root = node.right;
//   }

//   return true;
// }

// 中序遍历，递归写法
function inOrderTree(root: TreeNode | null, res: number[]): void {
  if (!root) return;

  inOrderTree(root.left, res);
  res.push(root.val);
  inOrderTree(root.right, res);
}

function isValidBST(root: TreeNode | null) {
  const res: number[] = [];
  inOrderTree(root, res);

  let pre = -Infinity;
  for (let i = 0; i < res.length; i++) {
    if (res[i] <= pre) return false;
    pre = res[i];
  }
  return true;
}

// @lc code=end
