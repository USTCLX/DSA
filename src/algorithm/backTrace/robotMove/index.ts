function movingCount(threshold: number, rows: number, cols: number): number {
  if (threshold < 0 || rows <= 0 || cols <= 0) {
    return 0;
  }

  // 申请一个临时矩阵，用来记录哪些坐标已经被访问过
  const visited: Array<boolean> = [];
  for (let i = 0; i < rows * cols; i++) {
    visited[i] = false;
  }

  const count = movingCountCore(threshold, rows, cols, 0, 0, visited);

  return count;
}

function movingCountCore(
  threshold: number,
  rows: number,
  cols: number,
  row: number,
  col: number,
  visited: Array<boolean>
): number {
  let count: number = 0;
  if (check(threshold, rows, cols, row, col, visited)) {
    visited[row * cols + col] = true;
    count =
      1 +
      movingCountCore(threshold, rows, cols, row - 1, col, visited) +
      movingCountCore(threshold, rows, cols, row, col - 1, visited) +
      movingCountCore(threshold, rows, cols, row + 1, col, visited) +
      movingCountCore(threshold, rows, cols, row, col + 1, visited);
  }
  return count;
}

/**
 * 验证当前坐标是否满足条件
 * @param threshold
 * @param rows
 * @param cols
 * @param row
 * @param col
 * @param visited
 */
function check(
  threshold: number,
  rows: number,
  cols: number,
  row: number,
  col: number,
  visited: Array<boolean>
): boolean {
  if (
    row >= 0 &&
    row < rows &&
    col >= 0 &&
    col < cols &&
    !visited[row * cols + col] &&
    getDigitSum(row) + getDigitSum(col) <= threshold
  ) {
    return true;
  }
  return false;
}

/**
 * 获取一个数字各位上的数字之和
 * @param num
 */
function getDigitSum(num: number): number {
  let sum = 0;
  while (num > 0) {
    sum += num % 10;
    num = Math.floor(num / 10);
  }
  return sum;
}

export default movingCount;
