/*
 * @lc app=leetcode.cn id=1423 lang=typescript
 *
 * [1423] 可获得的最大点数
 */

// @lc code=start
function maxScore(cardPoints: number[], k: number): number {
  const w = cardPoints.length - k;
  if (w <= 0) return cardPoints.reduce((a, b) => a + b, 0);

  const sum = cardPoints.reduce((a, b) => a + b, 0);
  let temp = 0;
  for (let i = 0; i < w; i++) {
    temp += cardPoints[i];
  }
  let max = sum - temp;
  for (let i = w; i < cardPoints.length; i++) {
    temp = temp - cardPoints[i - w] + cardPoints[i];
    max = Math.max(max, sum - temp);
  }
  return max;
}
// @lc code=end

export { maxScore };
