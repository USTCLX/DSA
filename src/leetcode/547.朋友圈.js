/*
 * @lc app=leetcode.cn id=547 lang=javascript
 *
 * [547] 朋友圈
 */

// @lc code=start
/**
 * @param {number[][]} M
 * @return {number}
 */

// var dfs = function(M, i, visited) {
//   // 如果i已经被访问过，直接返回
//   if (visited.has(i)) return;
//   visited.add(i);

//   // 再次遍历所有人
//   for (let j = 0; j < M.length; j++) {
//     if (!visited.has(j) && M[i][j] == 1) {
//       // 第j个人没有被访问过并且第j个人和第i个人是朋友
//       // 再去搜索j的朋友
//       dfs(M, j, visited);
//     }
//   }
// };

// // 使用dfs去遍历，并记录哪些节点已经被访问了
// // 朋友圈和岛屿数量不一样，朋友圈是对称的，因此m和n肯定一致
// var findCircleNum = function(M) {
//   // M的长度代表有多少个人
//   const len = M.length;
//   // 记录哪些节点被访问了
//   const visited = new Set();
//   // 记录朋友圈的数量
//   let count = 0;

//   for (let i = 0; i < len; i++) {
//     // 依次遍历每个人
//     if (!visited.has(i)) {
//       // 如果这个人还没有被访问过
//       count++;
//       // 深度优先的去搜索这个人的朋友链
//       dfs(M, i, visited);
//     }
//   }

//   return count;
// };

// 第二种解法
// 并查集，首先实现一个并查集

class UnionFind {
  constructor(n) {
    // 有n个人
    // 这n个人初始化都指向自己
    this.parent = Array(n).fill(-1);
    for (let i = 0; i < n; i++) {
      this.parent[i] = i;
    }

    // 初始化，每个人都是一个朋友圈，有n个朋友圈
    this.count = n;
  }

  find(i) {
    if (this.parent[i] !== i) {
      this.parent[i] = this.find(this.parent[i]);
    }
    return this.parent[i];
  }

  union(p, q) {
    const rootP = this.find(p);
    const rootQ = this.find(q);

    if (rootP !== rootQ) {
      // 两个节点的根不一样，需要合并，否则不需要合并
      this.count--;
      this.parent[rootQ] = rootP;
    }
  }
}

var findCircleNum = function(M) {
  const uf = new UnionFind(M.length);

  for (let i = 0; i < M.length; i++) {
    for (let j = 0; j < i; j++) {
      if (M[i][j] == 1) {
        // 这两个人认识，合并一下把
        uf.union(i, j);
      }
    }
  }

  return uf.count;
};

// @lc code=end
