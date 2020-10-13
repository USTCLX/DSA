/*
 * @lc app=leetcode.cn id=42 lang=typescript
 *
 * [42] 接雨水
 */

// @lc code=start

// 以前做过这道题，已经完全想不起来了。
// 这次看了leetcode的官方视频，先实现比较暴力的方法，直接两层循环来计算
// ❗️注意，第一层循环值关注当前这一列本身可以存多少雨水。而不要试图计算两个柱子之间一共存了多少雨水
// function trap(height: number[]): number {
//   let ans = 0;

//   // 这里不用计算两边的柱子了，因为两边无法存水
//   for (let i = 1; i < height.length - 1; i++) {
//     let maxLeft = 0;
//     let maxRight = 0;
//     // 寻找当前柱子左边的最大值
//     for (let j = 0; j < i; j++) {
//       maxLeft = Math.max(height[j], maxLeft);
//     }

//     // 寻找当前柱子右边的最大值
//     for (let k = height.length - 1; k > i; k--) {
//       maxRight = Math.max(height[k], maxRight);
//     }

//     // 计算当前列可以存多少雨水
//     const res = Math.min(maxLeft, maxRight) - height[i];
//     // 顺便累加到结果中
//     ans += res > 0 ? res : 0;
//   }

//   return ans;
// }

// 还有一种解法，算是动态规划。
// dpLeft[i] = max(dpLeft[i-1],height[i])
// dpRight[i] = max(dpRight[i+1],height[i])
// 1、首先从左向右扫描一遍数组，记录每一个位置向左看的最大值（其实就是将上一个的最大值和自己比较）
// 2、然后从右向左扫描一遍数组，记录每一个位置向右看的最大值
// 3、❗️这一步很关键，遍历数组，然后读取当前位置左边的最大值和右边的最大值，取小者和当前值比较，得到当前位置的存水量
// 不得不说，这就是动态规划
function trap(height: number[]): number {
  if (height.length <= 2) return 0;
  const dpLeft = Array(height.length).fill(0);
  const dpRight = Array(height.length).fill(0);
  const count = height.length;

  dpLeft[0] = height[0];
  dpRight[count - 1] = height[count - 1];

  for (let i = 1; i < count; i++) {
    dpLeft[i] = Math.max(dpLeft[i - 1], height[i]);
  }

  for (let j = count - 2; j >= 0; j--) {
    dpRight[j] = Math.max(dpRight[j + 1], height[j]);
  }

  let ans = 0;
  for (let i = 0; i < count; i++) {
    const res = Math.min(dpLeft[i], dpRight[i]) - height[i];
    ans += res > 0 ? res : 0;
  }
  return ans;
}
// @lc code=end
