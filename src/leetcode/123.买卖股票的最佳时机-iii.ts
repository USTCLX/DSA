/*
 * @lc app=leetcode.cn id=123 lang=typescript
 *
 * [123] 买卖股票的最佳时机 III
 */

// @lc code=start
/**
 * 动态规划
 * dp[i][j] 代表第i天的最大利润;j 代表手上是否有股票
 * dp[i][0] 表示手上没有股票时，第i天的最大利润
 * dp[i][1] 表示手上有股票，第i天的最大利润
 *
 * 两者取大
 * dp[i][0] = dp[i-1][0]  // 昨天没手上没股票，不动
 *          = dp[i-1][1] + prices[i] // 昨天手上有股票，卖出
 * dp[i][1] = dp[i-1][0] - prices[i] // 昨天手上没股票，买入
 *          = dp[i-1][1] // 昨天手上有股票，不动。
 * dp[i][k][j]  k 代表交易了几次
 */

function maxProfit(prices: number[]): number {
  // 如果天数小于等于一天，就不用买了
  const length = prices.length;
  // 初始化dp
  const dp = Array(prices.length);
  for (let i = 0; i < length; i++) {
    dp[i] = [];
    for (let j = 0; j <= 2; j++) {
      dp[i][j] = [];
      for (let k = 0; k < 2; k++) {
        dp[i][j][k] = 0;
      }
    }
  }

  // j为0
  for (let i = 0; i < length; i++) {
    dp[i][0][0] = 0;
    dp[i][0][1] = -Infinity; // 没有买进过，手上却股票；不可能；
  }

  // i为0
  for (let j = 0; j <= 2; j++) {
    dp[0][j][0] = 0; // 第一天，买进j手，但是手上没有股票；
    dp[0][j][1] = -prices[0]; // 第一天，买进j手，手上有一个股票；
  }

  for (let i = 1; i < length; i++) {
    for (let j = 1; j <= 2; j++) {
      dp[i][j][0] = Math.max(dp[i - 1][j][0], dp[i - 1][j][1] + prices[i]);
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j - 1][0] - prices[i]);
    }
  }

  let res = 0;
  for (let j = 0; j <= 2; j++) {
    res = Math.max(dp[length - 1][j][0]);
  }

  return res;
}
// @lc code=end
