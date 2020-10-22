/*
 * @lc app=leetcode.cn id=297 lang=javascript
 *
 * [297] 二叉树的序列化与反序列化
 */

export function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
  if (!root) return "[]";
  const queue = [root];
  const result = [];
  while (queue.length) {
    const node = queue.shift();
    if (!node) {
      result.push("null");
    } else {
      result.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  while (result.length) {
    if (result[result.length - 1] === "null") {
      result.pop();
    } else {
      break;
    }
  }

  return `[${result.join(",")}]`;
};

/**
 * Decodes your encoded data to tree.
 * 反序列化的设计比较精妙利用了一个队列，来存储后面的节点
 * 又通过一个for循环来遍历数组中的值，并且for循环内会自己额外的对循环变量i再加1
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  if (data.length <= 2) return null;
  const values = data.slice(1, data.length - 1).split(",");
  const root = new TreeNode(values[0]);
  const queue = [root];
  for (let i = 1; i < values.length; i++) {
    const parent = queue.shift();
    if (!parent) break;

    // 左孩子
    if (values[i] !== "null") {
      parent.left = new TreeNode(values[i]);
      queue.push(parent.left);
    }
    i++;
    // 右孩子
    // 这里要判断是否越界
    if (i < values.length && values[i] !== "null") {
      parent.right = new TreeNode(values[i]);
      queue.push(parent.right);
    }
  }

  return root;
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
// @lc code=end

export { serialize, deserialize };
