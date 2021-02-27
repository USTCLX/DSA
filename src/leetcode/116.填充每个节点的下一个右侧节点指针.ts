/*
 * @lc app=leetcode.cn id=116 lang=typescript
 *
 * [116] 填充每个节点的下一个右侧节点指针
 */

// @lc code=start
/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

// 层序遍历
// function connect(root: Node | null): Node | null {
//   if (!root) return root;

//   const queue = [root];

//   while (queue.length) {
//     let count = queue.length - 1;

//     while (count >= 0) {
//       const node = queue.shift();

//       if (node.left) queue.push(node.left);
//       if (node.right) queue.push(node.right);

//       if (count === 0) {
//         node.next = null;
//       } else {
//         node.next = queue[0];
//       }
//       count--;
//     }
//   }

//   return root;
// }

// 递归
function connect(root: Node | null): Node | null {
  if (!root) return null;

  let left = root.left;
  let right = root.right;

  // 把中间的都连起来
  while (left != null) {
    left.next = right;
    // 左边一直靠右
    left = left.right;
    // 右边一直靠左
    right = right.left;
  }

  connect(root.left);
  connect(root.right);

  return root;
}

// @lc code=end
