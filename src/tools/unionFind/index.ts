export class UnionFind {
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
