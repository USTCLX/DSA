/*
 * @lc app=leetcode.cn id=62 lang=typescript
 *
 * [62] 不同路径
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  const dp = [];

  for (let i = 0; i < m; i++) {
    dp[i] = Array(n);
  }

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (i == m - 1 || j == n - 1) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i + 1][j] + dp[i][j + 1];
      }
    }
  }

  return dp[0][0];
}
// @lc code=end
