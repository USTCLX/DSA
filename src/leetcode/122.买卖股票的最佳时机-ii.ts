/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
// 贪心算法
// 遍历所有天数，如果今天的价格比昨天高，就卖出。
// 条件：1. 只能持有一只股票。2. 可以买卖无数次
function maxProfit(prices: number[]): number {
  if (prices.length <= 1) return 0;
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) {
      profit += prices[i] - prices[i - 1];
    }
  }
  return profit;
}
// @lc code=end
