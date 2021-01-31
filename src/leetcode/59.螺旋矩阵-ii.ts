/*
 * @lc app=leetcode.cn id=59 lang=typescript
 *
 * [59] 螺旋矩阵 II
 */

// @lc code=start
// 需要借助上下左右四个边界来辅助我们解决问题。
// 填充顺序为top,right,bottom,left。这样的循环
// 每一条边界填充完毕，都需要缩减四个边界值
function generateMatrix(n: number): number[][] {
  // 初始化matrix
  const matrix = Array(n);
  for (let i = 0; i < matrix.length; i++) {
    matrix[i] = Array(n);
  }

  let top = 0;
  let bottom = n - 1;
  let left = 0;
  let right = n - 1;

  let currnet = 1;
  while (currnet <= n * n) {
    // 填top left->right
    for (let i = left; i <= right; i++) {
      matrix[top][i] = currnet;
      currnet++;
    }
    top++;

    // 填right,top->bottom
    for (let i = top; i <= bottom; i++) {
      matrix[i][right] = currnet;
      currnet++;
    }
    right--;

    // 填bottom，right->left
    for (let i = right; i >= left; i--) {
      matrix[bottom][i] = currnet;
      currnet++;
    }
    bottom--;

    // 填left，bottom->top
    for (let i = bottom; i >= top; i--) {
      matrix[i][left] = currnet;
      currnet++;
    }
    left++;
  }

  return matrix;
}
// @lc code=end
