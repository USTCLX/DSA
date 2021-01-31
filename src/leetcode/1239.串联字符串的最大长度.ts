/*
 * @lc app=leetcode.cn id=1239 lang=typescript
 *
 * [1239] 串联字符串的最大长度
 */

// @lc code=start

// 使用set来验证是否有重复
function check(str: string): boolean {
  const set = new Set([...str]);
  return set.size === str.length;
}
// 用一个set来保存非重复的key组合
// 暴力的解法
function maxLengthBySet(arr: string[]): number {
  const set = new Set();
  set.add("");
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let key of set) {
      let current = arr[i] + key;
      if (check(current)) {
        set.add(current);

        if (current.length > max) {
          max = current.length;
        }
      }
    }
  }
  return max;
}

// 另一种思路。对于数组中的每一个字符串，都有选择和不选择，两个选项
// dfs 深度优先遍历。
function isUnique(key: string, cur: string): boolean {
  const temp = key + cur;
  const set = new Set([...temp]);
  return set.size === temp.length;
}

function dfs(arr: string[], depth: number, cur: string): number {
  if (depth === arr.length) {
    // 到底了
    return 0;
  }

  const key = arr[depth];
  if (isUnique(key, cur)) {
    // 此时新的key中在cur中，没有已经存在的字符
    // 将key加入
    const len1 = key.length + dfs(arr, depth + 1, cur + key);
    // 不将key加入
    const len2 = dfs(arr, depth + 1, cur);

    // 返回两者较大值
    return Math.max(len1, len2);
  }

  // 不加入
  return dfs(arr, depth + 1, cur);
}

function maxLength(arr: string[]): number {
  return dfs(arr, 0, "");
}
// @lc code=end

export { maxLength };
