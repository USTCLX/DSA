/*
 * @lc app=leetcode.cn id=54 lang=typescript
 *
 * [54] 螺旋矩阵
 */

// @lc code=start

// 尝试使用类似dfs的方式，优先级分别是 先左，下，右上
// 思路右问题无法真正实现
// ❌❌❌❌❌❌❌❌❌❌❌❌🙅🙅🙅🙅🙅🙅🙅🙅🙅🙅🙅🙅🙅🙅
function dfs(matrix: number[][], i: number, j: number, visited: Set<number>) {
  const m = matrix.length;
  const n = matrix[0].length;
  if (i < 0 || i >= m || j < 0 || j >= n || visited.has(matrix[i][j])) {
    return;
  }

  visited.add(matrix[i][j]);

  // 这样每一次都优先往右，那么再从下往上的时候，
  // 就不能保证一直往上，而会转到向右
  // 右
  dfs(matrix, i, j + 1, visited);
  // 下
  dfs(matrix, i + 1, j, visited);
  // 左
  dfs(matrix, i, j - 1, visited);
  // 上
  dfs(matrix, i - 1, j, visited);
}

// 换个思路
// 使用一个方向来左，遍历的是欧改变这个方向，这个方向类似于一种状态机
// 这里有个地方卡了很久，就是回退和判断是否已经访问过这里
// 1. 如果一个节点已经访问过了，那就要回退到上一个节点，开始转向
// 2. 此时虽然方向变了，但是当前节点还是被访问过的，因此需要再新方向上先走一步
// function spiralOrder(matrix: number[][]): number[] {
//   if (!matrix.length || !matrix[0].length) return [];
//   const directions = [
//     [0, 1], // 右
//     [1, 0], // 下
//     [0, -1], // 左
//     [-1, 0] // 上
//   ];
//   let count = 0; // 用于记录方向的转变，次数，继而决定当前的方向

//   let i = 0;
//   let j = -1;

//   const m = matrix.length;
//   const n = matrix[0].length;
//   const map = new Map<string, number>();

//   while (map.size < n * m) {
//     const [di, dj] = directions[count % 4];
//     // 先走一步
//     i += di;
//     j += dj;
//     while (i >= 0 && j >= 0 && i < m && j < n && !map.has(`${i}${j}`)) {
//       map.set(`${i}${j}`, matrix[i][j]);
//       i += di;
//       j += dj;
//     }
//     // 回退一下
//     i -= di;
//     j -= dj;
//     // 转向
//     count++;
//   }

//   return [...map.values()];
// }

// leetcode上看到的解法，也不错，更加的清晰
// 思路是设定上下左右的边界，然后不断的缩小边界。
// 每个边界内部按照从顺序来遍历
// 循环的的条件就是边界是否越界
// 这种方式更好一些，但是需要注意边界的递进条件
function spiralOrder(matrix: number[][]): number[] {
  if (!matrix.length || !matrix[0].length) return [];

  let left = 0;
  let right = matrix[0].length - 1;
  let top = 0;
  let bottom = matrix.length - 1;

  const res = [];
  const m = matrix.length;
  const n = matrix[0].length;
  while (res.length < m * n) {
    // 上面从左到右
    for (let i = left; i <= right; i++) {
      res.push(matrix[top][i]);
    }
    top++;

    // 右边从上倒下
    for (let i = top; i <= bottom; i++) {
      res.push(matrix[i][right]);
    }
    right--;

    // 这里的这个判断很关键啊
    if (res.length === m * n) break;

    // 下面从右到左
    for (let i = right; i >= left; i--) {
      res.push(matrix[bottom][i]);
    }
    bottom--;

    // 左面从下到上
    for (let i = bottom; i >= top; i--) {
      res.push(matrix[i][left]);
    }
    left++;
  }

  return res;
}
// @lc code=end

export { spiralOrder };
