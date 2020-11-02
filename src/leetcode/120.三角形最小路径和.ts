/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
function minimumTotal(triangle: number[][]): number {
  const dp = Array(triangle.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(triangle[i].length);
  }

  for (let i = 0; i < dp[dp.length - 1].length; i++) {
    dp[dp.length - 1][i] = triangle[triangle.length - 1][i];
  }

  for (let i = dp.length - 2; i >= 0; i--) {
    for (let j = dp[i].length - 1; j >= 0; j--) {
      dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
    }
  }

  return dp[0][0];
}
// @lc code=end
