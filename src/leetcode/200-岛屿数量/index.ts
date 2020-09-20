/**
 * @param {character[][]} grid
 * @return {number}
 */

var dfs = function(grid, i, j, m, n) {
  if (grid[i][j] == "1") {
    grid[i][j] = "0";
    if (i - 1 >= 0) dfs(grid, i - 1, j, m, n);
    if (i + 1 <= m) dfs(grid, i + 1, j, m, n);
    if (j - 1 >= 0) dfs(grid, i, j - 1, m, n);
    if (j + 1 <= n) dfs(grid, i, j + 1, m, n);
  }
};

var bfs = function(grid, i, j, m, n) {
  const queue = [[i, j]];
  while (queue.length) {
    const [i, j] = queue.shift();
    if (grid[i][j] == "1") {
      grid[i][j] = "0";
      if (i - 1 >= 0) queue.push([i - 1, j]);
      if (i + 1 < m) queue.push([i + 1, j]);
      if (j - 1 >= 0) queue.push([i, j - 1]);
      if (j + 1 < n) queue.push([i, j + 1]);
    }
  }
};

export var numIslands = function(grid) {
  if (grid.length == 0) return 0;

  const m = grid.length;
  const n = grid[1].length;
  let count = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == "1") {
        count++;
        // dfs(grid, i, j, m - 1, n - 1);
        bfs(grid, i, j, m, n);
      }
    }
  }

  return count;
};
