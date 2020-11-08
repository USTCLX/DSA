/*
 * @lc app=leetcode.cn id=450 lang=typescript
 *
 * [450] 删除二叉搜索树中的节点
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

// 这种写法比较尴尬，虽然最后确实可以
// 不过不熟练的情况下，很多值得注意的case和想法也不是那么容易能够想到的
// function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
//   let pp = null;
//   let p = root;

//   while (p && p.val !== key) {
//     pp = p;
//     if (p.val > key) {
//       p = p.left;
//     } else if (p.val < key) {
//       p = p.right;
//     }
//   }

//   if (!p) return root; // 没找到

//   // 有左右子树
//   if (p.left && p.right) {
//     let minPP = p;
//     let minP = p.right;
//     while (minP.left) {
//       minPP = minP;
//       minP = minP.left;
//     }
//     p.val = minP.val;
//     p = minP;
//     pp = minPP;
//   }

//   let child = null;
//   if (p.left) {
//     child = p.left;
//   } else if (p.right) {
//     child = p.right;
//   }

//   if (!pp) {
//     // 如果没有pp，那么p一定是根节点，并且此时p一定只有一个子树
//     // 因为如果有两个子树，上面的循环，pp就肯定不是null了
//     return child;
//   } else if (pp.right === p) {
//     pp.right = child;
//   } else if (pp.left === p) {
//     pp.left = child;
//   }
//   return root;
// }

// 上次面试这道想到的其实是另一种解法：递归
// 当然，虽然是递归，也是要分三种情况来讨论的
// 现在来尝试实现这种写法
function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  if (!root) return root;

  if (root.val < key) {
    root.right = deleteNode(root.right, key);
  } else if (root.val > key) {
    root.left = deleteNode(root.left, key);
  } else {
    // 找到了，去删除
    if (!root.left) {
      return root.right;
    } else if (!root.right) {
      return root.left;
    } else {
      // 两个子树都存在
      let node = root.right;
      //找到当前节点右子树最左边的叶子结点
      while (node.left != null) {
        node = node.left;
      }
      //将root的左子树放到root的右子树的最下面的左叶子节点的左子树上
      node.left = root.left;
      return root.right;
    }
  }
  return root;
}
// @lc code=end
