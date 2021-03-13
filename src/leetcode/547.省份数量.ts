/*
 * @lc app=leetcode.cn id=547 lang=typescript
 *
 * [547] 省份数量
 */

// @lc code=start
// 染色法
function findCircleNum(isConnected: number[][]): number {
  if (!isConnected.length) return 0;

  const m = isConnected.length;
  const n = isConnected[0].length;
  const grid = isConnected.map(item => [...item]);
  let count = 0;

  const dfs = (i: number, j: number) => {
    if (i < 0 || i >= m || j < 0 || j >= n) return;

    if (grid[i][j] === 1) {
      grid[i][j] = 0;

      const dirs = [
        [1, 0],
        [-1, 0],
        [0, 1],
        [0, -1]
      ];

      for (let [dx, dy] of dirs) {
        dfs(dx + i, dy + j);
      }
    }
  };

  for (let i = 0; i < m; i++) {
    for (let j = 0; j <= n; j++) {
      if (grid[i][j] === 1) {
        count++;
        dfs(i, j);
      }
    }
  }

  return count;
}
// @lc code=end
