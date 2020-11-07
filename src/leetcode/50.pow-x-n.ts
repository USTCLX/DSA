/*
 * @lc app=leetcode.cn id=50 lang=typescript
 *
 * [50] Pow(x, n)
 */

// @lc code=start
function myPow(x: number, n: number): number {
  if (n < 0) {
    if (x === 0) {
      return 0;
    }
    return 1 / myPow(x, -n);
  }

  if (n === 0) {
    return 1;
  }
  const res = myPow(x, n >>> 1);
  return n & 1 ? res * res * x : res * res;
}
// @lc code=end

export { myPow };
