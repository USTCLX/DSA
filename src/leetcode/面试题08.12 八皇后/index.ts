const result = Array(8).fill(null); // 8行，数组值代表在第n行的第几列放置皇后
let count = 0;

export function count8Qunenes() {
  solve8Quenes(0);
  return count;
}

export function solve8Quenes(row: number) {
  if (row === 8) {
    count++;
    // printResult();
    return;
  }

  for (let column = 0; column < 8; column++) {
    if (isOk(row, column)) {
      result[row] = column; // 第row行的棋子放置在了第column列
      solve8Quenes(row + 1);
    }
  }
}

function isOk(row: number, column: number) {
  let leftUp = column - 1; // 左上对角线
  let rightUp = column + 1; // 右上对角线
  for (let i = row - 1; i >= 0; i--) {
    if (result[i] === column) {
      return false; // 同一列上已经有皇后了
    }
    if (leftUp >= 0) {
      if (result[i] === leftUp) {
        return false; // 坐上对角线有皇后了
      }
    }
    if (rightUp < 8) {
      if (result[i] === leftUp) {
        return false; // 右上对角线有皇后了
      }
    }
    leftUp--;
    rightUp++;
  }
  return true;
}

function printResult() {
  for (let row = 0; row < 8; row++) {
    let str = "";
    for (let columu = 0; columu < 8; columu++) {
      if (result[row] === columu) {
        str += "Q";
      } else {
        str += "*";
      }
    }
    console.log(str);
  }
}
