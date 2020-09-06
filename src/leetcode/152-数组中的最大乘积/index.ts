export function maxProduct(nums: Array<number>): number {
  // initialize dp array
  const dp = new Array(nums.length);
  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(2);
  }

  // initialize dp and res initial value
  let res = (dp[0][0] = dp[0][1] = nums[0]);

  // recursion
  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    dp[i][0] = Math.max(dp[i - 1][0] * num, dp[i - 1][1] * num, num);
    dp[i][1] = Math.min(dp[i - 1][0] * num, dp[i - 1][1] * num, num);
    res = Math.max(res, dp[i][0]);
  }
  return res;
}
