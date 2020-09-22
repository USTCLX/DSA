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

function greddy(prices: number[]): number {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}

function maxProfit(prices: number[]): number {
  // 如果天数小于等于一天，就不用买了
  if (prices.length <= 1) return 0;
}
// @lc code=end
