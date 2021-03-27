/*
 * @lc app=leetcode.cn id=221 lang=typescript
 *
 * [221] 最大正方形
 */

// @lc code=start
// function maximalSquare(matrix: string[][]): number {
//   if (!matrix.length) return 0;

//   // dp 数组
//   const m = matrix.length;
//   const n = matrix[0].length;
//   const dp = Array(m);
//   for (let i = 0; i < m; i++) {
//     dp[i] = Array(n);
//     for (let j = 0; j < n; j++) {
//       dp[i][j] = 0;
//     }
//   }

//   let max = 0;

//   // dp[i][j]代表以[i,j]作为右下角的正方形的最大面积
//   // 初始化dp数组
//   for (let i = 0; i < m; i++) {
//     dp[i][0] = Number(matrix[i][0]);
//     max = Math.max(max, dp[i][0]);
//   }
//   for (let j = 0; j < n; j++) {
//     dp[0][j] = Number(matrix[0][j]);
//     max = Math.max(max, dp[0][j]);
//   }

//   for (let i = 1; i < m; i++) {
//     for (let j = 1; j < n; j++) {
//       if (matrix[i][j] === "1") {
//         dp[i][j] = 1;
//         const size = dp[i - 1][j - 1];
//         if (size !== 0) {
//           // 有可能组成新的正方形
//           // 验证两条边是否是1
//           let length = Math.sqrt(size);
//           for (let k = 1; k <= length; k++) {
//             if (matrix[i][j - k] !== "0" && matrix[i - k][j] !== "0") {
//               dp[i][j] = Math.pow(k + 1, 2);
//             } else {
//               break;
//             }
//           }
//         }
//       }

//       max = Math.max(max, dp[i][j]);
//     }
//   }

//   return max;
// }

function maximalSquare(matrix: string[][]): number {
  if (!matrix.length) return 0;
  const row = matrix.length;
  const column = matrix[0].length;

  const dp = Array(row + 1);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = Array(column + 1).fill(0);
  }
  let max = 0;

  for (let i = 1; i <= row; i++) {
    for (let j = 1; j <= column; j++) {
      if (matrix[i - 1][j - 1] === "1") {
        dp[i][j] = Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1;
      }
      max = Math.max(max, Math.pow(dp[i][j], 2));
    }
  }
  return max;
}
// @lc code=end

export { maximalSquare };
