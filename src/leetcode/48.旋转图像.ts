/*
 * @lc app=leetcode.cn id=48 lang=typescript
 *
 * [48] 旋转图像
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */

// 方法1
// 借助一个辅助数组来临时存储旋转后的值
// 有一个规律，第（i,j）的元素，代表第i行j列，旋转后的坐标为（j, n-1)
// 其中n为行数
// function rotate(matrix: number[][]): void {
//   const temp = Array(matrix.length);
//   for (let i = 0; i < temp.length; i++) {
//     temp[i] = Array(matrix[0].length).fill(0);
//   }

//   const n = matrix.length;
//   for (let i = 0; i < temp.length; i++) {
//     for (let j = 0; j < temp[i].length; j++) {
//       temp[j][n - i - 1] = matrix[i][j];
//     }
//   }

//   for (let i = 0; i < temp.length; i++) {
//     for (let j = 0; j < temp[i].length; j++) {
//       matrix[i][j] = temp[i][j];
//     }
//   }
// }

// 翻转法，这种更简单（更容易记忆）
// 先沿中间水平线水平翻转，然后沿左上到右下的主对角线翻转
// 1. 水平翻转 m[r][c] = m[n-r-1][c]
// 2. 对角线翻转 m[r][c] = m[c][r]

function rotate(matrix: number[][]): void {
  // 水平翻转
  const n = matrix.length;
  for (let r = 0; r < Math.floor(matrix.length / 2); r++) {
    for (let c = 0; c < matrix[r].length; c++) {
      [matrix[n - r - 1][c], matrix[r][c]] = [
        matrix[r][c],
        matrix[n - r - 1][c]
      ];
    }
  }

  // 对角线翻转
  for (let r = 0; r < matrix.length; r++) {
    for (let c = 0; c < r; c++) {
      [matrix[c][r], matrix[r][c]] = [matrix[r][c], matrix[c][r]];
    }
  }
}
// @lc code=end
