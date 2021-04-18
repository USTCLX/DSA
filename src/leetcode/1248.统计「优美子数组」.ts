/*
 * @lc app=leetcode.cn id=1248 lang=typescript
 *
 * [1248] 统计「优美子数组」
 */

// @lc code=start
function isOdd(num: number): boolean {
  return (num & 1) === 1;
}

function numberOfSubarrays(nums: number[], k: number): number {
  // presum[i] 代表以i为结尾的奇数的个数
  let presum = Array(nums.length + 1).fill(0);
  // key 奇数的个数。 val 这种case的数量
  let map = new Map();
  map.set(0, 1);

  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    presum[i + 1] = presum[i] + (isOdd(nums[i]) ? 1 : 0);

    const target = presum[i + 1] - k;
    if (map.has(target)) {
      count = count + map.get(target);
    }

    const val = map.get(presum[i + 1]) || 0;
    map.set(presum[i + 1], val + 1);
  }

  return count;
}
// @lc code=end

export { numberOfSubarrays };
