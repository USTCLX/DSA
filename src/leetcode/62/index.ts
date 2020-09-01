export const countPaths = (col: number, row: number): number => {
  const dp = [];
  for (let r = 0; r < row; r++) {
    dp[r] = new Array(col);
  }

  for (let r = row - 1; r >= 0; r--) {
    for (let c = col - 1; c >= 0; c--) {
      // 最下面一行的元素，只有一种走法，就是不停向右
      // 最右面一列的元素，只有一种走法，就是不停向下
      if (r === row - 1 || c === col - 1) {
        dp[r][c] = 1;
      } else {
        dp[r][c] = dp[r + 1][c] + dp[r][c + 1];
      }
    }
  }

  return dp[0][0];
};
