/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 解法1：递归
// 这是通用方法，没有使用二叉搜索树的性质
var lowestCommonAncestor = function(root, p, q) {
  if (!root) return root;

  if (root.val === p.val || root.val === q.val) return root;

  const leftNode = lowestCommonAncestor(root.left, p, q);
  const rightNode = lowestCommonAncestor(root.right, p, q);
  if (leftNode && rightNode) {
    return root;
  } else if (leftNode) {
    return leftNode;
  } else {
    return rightNode;
  }
};

// 解法2: 路径追踪
// 先搜索p，记录路径
// 再搜索q，记录路径
// 顺着路径找到分岔点就是了
// var lowestCommonAncestor = function(root, p, q) {
//   if (!root) return null;

//   let node;
//   let path1 = [];
//   let path2 = [];
//   // 有个重要的条件，p和q存在与二叉树中
//   node = root;
//   while (node) {
//     path1.push(node);
//     if (node.val === p.val) {
//       break;
//     } else if (node.val < p.val) {
//       node = node.right;
//     } else if (node.val > p.val) {
//       node = node.left;
//     }
//   }

//   node = root;
//   while (node) {
//     path2.push(node);
//     if (node.val === q.val) {
//       break;
//     } else if (node.val < q.val) {
//       node = node.right;
//     } else if (node.val > q.val) {
//       node = node.left;
//     }
//   }
//   let ancestor = null;
//   for (let i = 0; i < Math.min(path1.length, path2.length); i++) {
//     if (path1[i] === path2[i]) {
//       ancestor = path2[i];
//     } else {
//       break;
//     }
//   }

//   return ancestor;
// };

// 解法3:
// 利用二叉搜索树的性质，用循环不用递归
// 这里要注意，只考虑两个都大于和两个都小于的场景，其他就说名可以返回了
// var lowestCommonAncestor = function(root, p, q) {
//   if (!root) return null;
//   let node = root;
//   while (node) {
//     if (node.val < p.val && node.val < q.val) {
//       node = node.right;
//     } else if (node.val > p.val && node.val > q.val) {
//       node = node.left;
//     } else {
//       break;
//     }
//   }
//   return node;
// };
// @lc code=end
