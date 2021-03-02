/*
 * @lc app=leetcode.cn id=695 lang=typescript
 *
 * [695] 岛屿的最大面积
 */

// @lc code=start

function dfs(
  grid: number[][],
  i: number,
  j: number,
  visited: boolean[][]
): number {
  const m = grid.length;
  const n = grid[0].length;

  if (i < 0 || j < 0 || i >= m || j >= n || visited[i][j] || !grid[i][j]) {
    return 0;
  }

  visited[i][j] = true;

  const dirs = [
    [-1, 0],
    [1, 0],
    [0, 1],
    [0, -1]
  ];
  let area = 1;
  for (let [dx, dy] of dirs) {
    area += dfs(grid, i + dx, j + dy, visited);
  }

  return area;
}

// 啥也别说了dfs
function maxAreaOfIsland(grid: number[][]): number {
  if (!grid.length) return 0;

  const m = grid.length;
  const n = grid[0].length;

  // 记录某个地面是否被访问过
  const visited = Array(m);
  for (let i = 0; i < visited.length; i++) {
    visited[i] = Array(n).fill(false);
  }

  let max = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, dfs(grid, i, j, visited));
    }
  }

  return max;
}
// @lc code=end

export { maxAreaOfIsland };
