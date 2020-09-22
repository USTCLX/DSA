/*
 * @lc app=leetcode.cn id=121 lang=typescript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * 两层循环，记录差值，同时动态更新最大收益
 * @param prices
 */
// function maxProfit(prices: number[]): number {
//   let profit = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       let curVal = prices[j] - prices[i];
//       if (curVal > profit) {
//         profit = curVal;
//       }
//     }
//   }
//   return profit;
// }

// 一层循环，遍历的过程中，记录已经遍历过的最小值
// function maxProfit(prices: number[]): number {
//   let profit = 0;
//   let min = prices[0];
//   for (let i = 0; i < prices.length; i++) {
//     if (prices[i] - min > profit) {
//       profit = prices[i] - min;
//     }
//     if (prices[i] < min) {
//       min = prices[i];
//     }
//   }
//   return profit;
// }

/**
 * 动态规划
 * 二维dp状态
 */
function maxProfit(prices: number[]): number {
  if (prices.length == 0) return 0;

  const dp: number[][] = [];
  for (let i = 0; i < prices.length; i++) {
    dp[i] = Array(3);
  }
  // 没买股票
  dp[0][0] = 0;
  // 手上有一股
  dp[0][1] = -prices[0];
  // 刚卖掉一股
  dp[0][2] = 0;

  let res = 0;
  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = dp[i - 1][0];
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
    dp[i][2] = dp[i - 1][1] + prices[i];

    res = Math.max(res, dp[i][0], dp[i][1], dp[i][2]);
  }
  return res;
}

// @lc code=end
