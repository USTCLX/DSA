/*
 * @lc app=leetcode.cn id=120 lang=typescript
 *
 * [120] 三角形最小路径和
 */

// @lc code=start
// 动态规划
// function minimumTotal(triangle: number[][]): number {
//   const dp = Array(triangle.length);
//   for (let i = 0; i < dp.length; i++) {
//     dp[i] = Array(triangle[i].length);
//   }

//   for (let i = 0; i < dp[dp.length - 1].length; i++) {
//     dp[dp.length - 1][i] = triangle[triangle.length - 1][i];
//   }

//   for (let i = dp.length - 2; i >= 0; i--) {
//     for (let j = dp[i].length - 1; j >= 0; j--) {
//       dp[i][j] = Math.min(dp[i + 1][j], dp[i + 1][j + 1]) + triangle[i][j];
//     }
//   }

//   return dp[0][0];
// }

function dfs(triangle: number[][], i: number, j: number, sum: number): number {
  // terminator
  if (i == triangle.length) {
    return sum;
  }

  // process
  sum += triangle[i][j];

  // drill down
  return Math.min(
    dfs(triangle, i + 1, j, sum),
    dfs(triangle, i + 1, j + 1, sum)
  );
}

// bfs 递归搜索
// 但是这种方法会超时，很尴尬
// function minimumTotal(triangle: number[][]): number {
//   if (triangle.length == 0 || triangle[0].length == 0) {
//     return 0;
//   }

//   return dfs(triangle, 0, 0, 0);
// }

// 第二次用dp实现一遍
// 从底向上
// 当前元素等于下一层相邻节点中的更小值与自己相加
// 最后一层的元素就是初始值
function minimumTotal(triangle: number[][]): number {
  const dp = triangle.map(item => [...item]);

  for (let i = triangle.length - 2; i >= 0; i--) {
    for (let j = 0; j < triangle[i].length; j++) {
      dp[i][j] += Math.min(dp[i + 1][j], dp[i + 1][j + 1]);
    }
  }

  return dp[0][0];
}

// @lc code=end
export { minimumTotal };
