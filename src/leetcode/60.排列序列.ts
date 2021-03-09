/*
 * @lc app=leetcode.cn id=60 lang=typescript
 *
 * [60] 排列序列
 */

// @lc code=start
// 啥也别说了，先复习一下全排列把
function getPermutation(n: number, k: number): string {
  let count = 0;

  const visited: Set<number> = new Set();
  const res: number[][] = [];

  const backtrack = (): string | undefined => {
    if (visited.size === n) {
      res.push([...visited]);

      count++;
      if (count === k) {
        return res[res.length - 1].join("");
      }
      return;
    }

    for (let i = 1; i <= n; i++) {
      if (visited.has(i)) continue;

      visited.add(i);
      const res = backtrack();
      visited.delete(i);

      if (res) {
        return res;
      }
    }
  };

  return backtrack();
}
// @lc code=end
