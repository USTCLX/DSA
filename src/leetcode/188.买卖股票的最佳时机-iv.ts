/*
 * @lc app=leetcode.cn id=188 lang=typescript
 *
 * [188] 买卖股票的最佳时机 IV
 */

// @lc code=start
function greddy(prices: number[]): number {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}

function maxProfit(k: number, prices: number[]): number {
  // 这里需要是k+1, 比如 k=2 代表可以操作0，1，2次，因此length为3
  k = k + 1;
  // 如果天数小于等于一天，就不用买了
  if (prices.length <= 1) return 0;

  // 如果交易的次数可以大于交易天数的一半，可以退化为一天可以买无数次
  if (k > prices.length / 2) return greddy(prices);

  // 初始化三维dp数组
  const dp = Array(prices.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(k);
    for (let j = 0; j < dp[i].length; j++) {
      dp[i][j] = [];
    }
  }
  for (let i = 0; i < k; i++) {
    // 第一天完成交易k次，但是手上没股票
    dp[0][i][0] = 0;
    // 第一天完成交易k次，但是手上有股票
    dp[0][i][1] = -prices[0];
  }
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    for (let j = 0; j < k; j++) {
      dp[i][j][0] =
        j != 0
          ? Math.max(dp[i - 1][j][0], dp[i - 1][j - 1][1] + prices[i])
          : dp[i - 1][0][0];
      dp[i][j][1] = Math.max(dp[i - 1][j][1], dp[i - 1][j][0] - prices[i]);
      profit = Math.max(dp[i][j][0], profit);
    }
  }
  return profit;
}

// @lc code=end
