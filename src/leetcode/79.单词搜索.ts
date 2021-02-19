/*
 * @lc app=leetcode.cn id=79 lang=typescript
 *
 * [79] 单词搜索
 */

// @lc code=start

function dfs(
  board: string[][],
  row: number,
  col: number,
  word: string,
  visited = new Set()
): boolean {
  // 如果word为空，返回true
  if (!word) return true;

  const m = board.length;
  const n = board[0].length;

  if (row < 0 || row >= m || col >= n || col < 0) return false;

  // 如果当前行和列已经被访问过，返回false
  if (visited.has(`${row}-${col}`)) return false;

  // 如果第一个字符相同，继续搜索相邻单元
  if (board[row][col] === word[0]) {
    // 标记当前单元已访问
    visited.add(`${row}-${col}`);

    // 下一个搜索的单词
    const subWord = word.slice(1);
    const directions = [
      [-1, 0],
      [1, 0],
      [0, 1],
      [0, -1]
    ];
    for (let [ox, oy] of directions) {
      if (dfs(board, row + ox, col + oy, subWord, visited)) {
        return true;
      }
    }

    // 释放当前单元访问标记
    visited.delete(`${row}-${col}`);
  }
  return false;
}

function exist(board: string[][], word: string): boolean {
  if (!board || !board.length) return false;
  const m = board.length;
  const n = board[0].length;

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(board, i, j, word)) {
        return true;
      }
    }
  }

  return false;
}
// @lc code=end

export { exist };
