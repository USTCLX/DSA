/*
 * @lc app=leetcode.cn id=200 lang=javascript
 *
 * [200] 岛屿数量
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */

// 使用并查集
// 首先开发一个并查集
// class UnionFind {
//   constructor(grid) {
//     const m = grid.length;
//     const n = grid[0].length;

//     this.parent = Array(m * n).fill(-1);
//     this.rank = Array(m * n).fill(0);
//     this.count = 0;
//     for (let i = 0; i < m; i++) {
//       for (let j = 0; j < n; j++) {
//         if (grid[i][j] == "1") {
//           this.parent[i * n + j] = i * n + j;
//           this.rank[i * n + j] = 1;
//           this.count++;
//         }
//       }
//     }
//   }

//   find(i) {
//     if (this.parent[i] !== i) {
//       this.parent[i] = this.find(this.parent[i]);
//     }
//     return this.parent[i];
//   }

//   union(p, q) {
//     const rootP = this.find(p);
//     const rootQ = this.find(q);

//     if (rootP !== rootQ) {
//       // 合并
//       if (this.rank[rootP] < this.rank[rootQ]) {
//         this.parent[rootP] = rootQ;
//       } else if (this.rank[rootP] > this.rank[rootQ]) {
//         this.parent[rootQ] = rootP;
//       } else {
//         // 将Q合并为P的孩子
//         this.parent[rootQ] = rootP;
//         // P的rank要加一
//         this.rank[rootP]++;
//       }

//       // 只要合并，数量就要减1
//       this.count--;
//     }
//   }
// }

// var numIslands = function(grid) {
//   if (grid.length == 0 || grid[0].length == 0) return 0;

//   const m = grid.length;
//   const n = grid[0].length;
//   const uf = new UnionFind(grid);
//   const range = [
//     [1, 0], // 上移
//     [-1, 0], // 下移
//     [0, 1], // 右移
//     [0, -1] // 左移
//   ];
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (grid[i][j] == "1") {
//         for (let [di, dj] of range) {
//           // 验证上下左右是否是1，如果是1，则将其和[i,j]合并
//           const ri = i + di;
//           const rj = j + dj;
//           if (ri >= 0 && rj >= 0 && ri < m && rj < n && grid[ri][rj] == "1") {
//             uf.union(i * n + j, ri * n + rj);
//           }
//         }
//       }
//     }
//   }
//   return uf.count;
// };

var dfs = function(grid, i, j) {
  if (grid[i][j] !== "1") return;

  const m = grid.length;
  const n = grid[0].length;
  const range = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1]
  ];
  grid[i][j] = "0";

  for (let [di, dj] of range) {
    const ri = i + di;
    const rj = j + dj;
    if (ri >= 0 && rj >= 0 && ri < m && rj < n && grid[ri][rj] === "1") {
      dfs(grid, ri, rj);
    }
  }
};

var copy = function(target) {
  if (Array.isArray(target)) {
    const temp = [];
    for (let i = 0; i < target.length; i++) {
      temp[i] = copy(target[i]);
    }
    return temp;
  }
  return target;
};
// 第二种方法，使用dfs来做染色
var numIslands = function(grid) {
  if (!grid || !grid.length || !grid[0].length) return 0;

  const m = grid.length;
  const n = grid[0].length;
  const cGrid = copy(grid);
  let count = 0;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (cGrid[i][j] === "1") {
        count++;
        // 对这个点进行dfs遍历并处理
        dfs(cGrid, i, j);
      }
    }
  }

  return count;
};
// @lc code=end

export { numIslands };
