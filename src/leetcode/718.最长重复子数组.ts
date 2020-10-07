/*
 * @lc app=leetcode.cn id=718 lang=typescript
 *
 * [718] 最长重复子数组
 */

// @lc code=start
// 暴力法
function findLength(A: number[], B: number[]): number {
  let max = 0;
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      let p = 0;
      while (i + p < A.length && j + p < B.length && A[i + p] === B[j + p]) {
        max = Math.max(max, p + 1);
        p++;
      }
    }
  }
  return max;
}
// @lc code=end
