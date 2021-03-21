/*
 * @lc app=leetcode.cn id=122 lang=typescript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
// 贪心算法
// 遍历所有天数，如果今天的价格比昨天高，就卖出。
// 条件：1. 只能持有一只股票。2. 可以买卖无数次
// function maxProfit(prices: number[]): number {
//   if (prices.length <= 1) return 0;
//   let profit = 0;
//   for (let i = 1; i < prices.length; i++) {
//     if (prices[i] > prices[i - 1]) {
//       profit += prices[i] - prices[i - 1];
//     }
//   }
//   return profit;
// }

// 暴力法
// 深度优先搜索，遍历操作树
// 会导致超时，毕竟情况太多了
// function maxProfit(prices: number[]): number {
//   let max = 0;
//   const length = prices.length;

//   // status:0代表手上没有股票，可以买。1代表手上有股票，可以卖。
//   const dfs = (count: number, profit: number, status: number) => {
//     if (count === length) {
//       max = Math.max(max, profit);
//       return;
//     }

//     // 按兵不动
//     dfs(count + 1, profit, status);

//     // 进行操作
//     if (status === 0) {
//       // 进行买入，利润要减掉当前价格
//       dfs(count + 1, profit - prices[count], 1);
//     } else if (status === 1) {
//       // 进行卖出，利润要加上当前价格
//       dfs(count + 1, profit + prices[count], 0);
//     }
//   };

//   dfs(0, 0, 0);

//   return max;
// }

function maxProfit(prices: number[]): number {
  if (!prices || prices.length < 2) return 0;

  const dp = prices.map(() => [0, 0]);
  dp[0][0] = 0;
  dp[0][1] = -prices[0];

  for (let i = 1; i < prices.length; i++) {
    dp[i][0] = Math.max(dp[i - 1][0], dp[i - 1][1] + prices[i]);
    dp[i][1] = Math.max(dp[i - 1][1], dp[i - 1][0] - prices[i]);
  }

  return dp[prices.length - 1][0];
}
// @lc code=end
