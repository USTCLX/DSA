/*
 * @lc app=leetcode.cn id=200 lang=typescript
 *
 * [200] 岛屿数量
 */

// @lc code=start
// 解法1:染色法
// function numIslands(grid: string[][]): number {
//   let count = 0;
//   const m = grid.length;
//   const n = grid[0].length;
//   for (let i = 0; i < grid.length; i++) {
//     for (let j = 0; j < grid[i].length; j++) {
//       if (grid[i][j] === "1") {
//         count++;
//         // 清除与之相连的1，使用bfs
//         const queue = [[i, j]];
//         while (queue.length) {
//           const [i, j]: any = queue.shift();
//           if (grid[i][j] === "1") {
//             grid[i][j] = "0";
//             if (i - 1 >= 0 && grid[i - 1][j] === "1") queue.push([i - 1, j]);
//             if (i + 1 < m && grid[i + 1][j] === "1") queue.push([i + 1, j]);
//             if (j - 1 >= 0 && grid[i][j - 1] === "1") queue.push([i, j - 1]);
//             if (j + 1 < n && grid[i][j + 1] === "1") queue.push([i, j + 1]);
//           }
//         }
//       }
//     }
//   }

//   return count;
// }

// 解法2: 并查集
class UnionFind {
  parent: number[];
  rank: number[];
  count: number = 0;
  constructor(M: number[][]) {
    const m = M.length;
    const n = M[0].length;
    this.rank = Array(m * n).fill(0);
    this.parent = Array(m * n).fill(-1);
    for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
        if (M[i][j] == 1) {
          this.parent[i * n + j] = i * n + j;
          this.count++;
        }
      }
    }
  }

  // 查找一个元素的parent
  find(i: number): number {
    if (this.parent[i] !== i) {
      this.parent[i] = this.find(this.parent[i]);
    }
    return this.parent[i];
  }

  // 合并两个元素
  union(x: number, y: number) {
    const rootX = this.find(x);
    const rootY = this.find(y);

    if (rootX !== rootY) {
      // 执行合并
      if (this.rank[rootX] > this.rank[rootY]) {
        this.parent[rootY] = rootX;
      } else if (this.rank[rootX] < this.rank[rootY]) {
        this.parent[rootX] = rootY;
      } else {
        // 两个rank一致
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
      // 合并成功，count-1
      this.count--;
    }
  }
}

function numIslands(grid: number[][]): number {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  const m = grid.length;
  const n = grid[0].length;
  const range = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  const uf = new UnionFind(grid);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] == 1) {
        for (let [di, dj] of range) {
          const ri = i + di;
          const rj = j + dj;
          if (ri >= 0 && rj >= 0 && ri < m && rj < n && grid[ri][rj] == 1) {
            uf.union(i * n + j, ri * n + rj);
          }
        }
      }
    }
  }

  return uf.count;
}
// @lc code=end

export { numIslands };
