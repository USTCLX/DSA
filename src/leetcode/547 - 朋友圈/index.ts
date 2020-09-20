/**
 * @param {number[][]} M
 * @return {number}
 */

import { countPaths } from "../../classification/dp/countPaths";

var dfs = function(M, i, visited) {
  if (visited[i]) return;

  visited[i] = true;
  for (let j = 0; j < M.length; j++) {
    if (!visited[j] && M[i][j] == 1) {
      // 去遍历他朋友的朋友
      dfs(M, j, visited);
    }
  }
};

// 这题和岛屿数量不一样。
// 核心思想一句话，对于学生A，先遍历他的朋友，然后在遍历他朋友的朋友
export var findCircleNum = function(M) {
  const visited = Array(M.length).fill(false);

  let count = 0;
  // 变量每一个人
  for (let i = 0; i < M.length; i++) {
    if (!visited[i]) {
      count++;
      // 对于一个人A，去遍历他的朋友们
      dfs(M, i, visited);
    }
  }
  return count;
};
