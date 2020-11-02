/*
 * @lc app=leetcode.cn id=547 lang=typescript
 *
 * [547] 朋友圈
 */

// @lc code=start

class UnionFind {
  parent: number[];
  count: number = 0;
  rank: number[];
  constructor(M: number[][]) {
    this.count = M.length;
    this.parent = Array(M.length).fill(1);
    this.rank = Array(M.length).fill(0);
    for (let i = 0; i < M.length; i++) {
      this.parent[i] = i;
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
      // 合并
      this.count--;
      if (this.rank[rootX] < this.rank[rootY]) {
        // X合并给Y
        this.parent[rootX] = rootY;
      } else if (this.rank[rootX] > this.rank[rootY]) {
        // 把y合并给x
        this.parent[rootY] = rootX;
      } else {
        this.parent[rootY] = rootX;
        this.rank[rootX]++;
      }
    }
  }
}

function findCircleNum(M: number[][]): number {
  if (M.length === 0 || M[0].length === 0) return 0;

  const m = M.length;
  const n = M[0].length;

  const uf = new UnionFind(M);

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (M[i][j] === 1) {
        uf.union(i, j);
      }
    }
  }

  return uf.count;
}
// @lc code=end

export { findCircleNum };
