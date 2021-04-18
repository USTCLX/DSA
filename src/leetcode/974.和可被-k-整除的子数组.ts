/*
 * @lc app=leetcode.cn id=974 lang=typescript
 *
 * [974] 和可被 K 整除的子数组
 */

// @lc code=start
function subarraysDivByK(A: number[], K: number): number {
  // 记录前缀和k的余数，记录这个余数的个数
  const map = Array(K).fill(0);
  // 余数为0的个数初始值是1，因为空[]是子串，它的和是0，和K的余数是0，因此个数是1.
  map[0] = 1;
  let res = 0;
  let presum = 0;
  for (let i = 0; i < A.length; i++) {
    presum = presum + A[i];
    const target = ((presum % K) + K) % K;
    if (map[target]) {
      res += map[target];
    }
    map[target]++;
  }
  return res;
}
// @lc code=end

export { subarraysDivByK };
