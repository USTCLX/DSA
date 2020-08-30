export const countPaths = (col: number, row: number): number => {
  const opts = [];
  for (let i = 0; i < row; i++) {
    opts.push(new Array(col));
  }

  for (let i = row - 1; i >= 0; i--) {
    for (let j = col - 1; j >= 0; j--) {
      if (i === row - 1 && j === col - 1) {
        opts[i][j] = 1;
      } else {
        opts[i][j] = (opts[i + 1] ? opts[i + 1][j] : 0) + (opts[i][j + 1] || 0);
      }
    }
  }

  return opts[0][0];
};
