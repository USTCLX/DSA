/*
 * @lc app=leetcode.cn id=73 lang=typescript
 *
 * [73] 矩阵置零
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
// 记录哪些坐标的数字是0
// 然后统一置0
// function setZeroes(matrix: number[][]): void {
//   if (!matrix.length) return;
//   const m = matrix.length;
//   const n = matrix[0].length;
//   const rows = [];
//   const cols = [];

//   // 统计0的横、纵坐标
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === 0) {
//         rows.push(i);
//         cols.push(j);
//       }
//     }
//   }

//   // 置0
//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (rows.includes(i) || cols.includes(j)) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
// }
// 如果不想使用额外的空间来存储matrix为0的坐标
// 那么可以将0所在的这一行（列）的所有元素做一个标记。
// 但是不能标记为0，只能标记为一个特殊的数字。然后后面统一将这个特殊的数字都置为0

function setFlag(matrix: number[][], row: number, col: number) {
  const m = matrix.length;
  const n = matrix[0].length;

  // 需要注意，不能把0也置为Infinity
  for (let i = 0; i < n; i++) {
    if (matrix[row][i] !== 0) {
      matrix[row][i] = Infinity;
    }
  }

  for (let i = 0; i < m; i++) {
    if (matrix[i][col] !== 0) {
      matrix[i][col] = Infinity;
    }
  }
}

// function setZeroes(matrix: number[][]): void {
//   if (!matrix || !matrix.length) return;

//   const m = matrix.length;
//   const n = matrix[0].length;

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === 0) {
//         setFlag(matrix, i, j);
//       }
//     }
//   }

//   for (let i = 0; i < m; i++) {
//     for (let j = 0; j < n; j++) {
//       if (matrix[i][j] === Infinity) {
//         matrix[i][j] = 0;
//       }
//     }
//   }
// }
// 使用第一行与第一列作为标记位
function setZeroes(matrix: number[][]): void {
  if (!matrix || !matrix.length) return;

  const m = matrix.length;
  const n = matrix[0].length;

  // matrix[0][0] 有可能自己本身是0
  // 也有可能是被同行或者同列的作为标记置成了0
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // 依次从右下角往左上角更新
  // 如果从左上角向右下脚更新，会导致第一行都变成0。
  // 继而整个矩阵变为0
  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      if (matrix[i][0] === 0 || matrix[0][j] == 0) {
        matrix[i][j] = 0;
      }
    }
  }
}
// @lc code=end

export { setZeroes };
