/*
 * @lc app=leetcode.cn id=56 lang=typescript
 *
 * [56] 合并区间
 */

// @lc code=start
// 直观的想法，将当前元素和后面的元素比较，如果重叠，就扩展当前项的番位
// 并删除后面的元素
// 需要注意将i--。 继续用当前元素做比较
// function merge(intervals: number[][]): number[][] {
//   // 按第一位排序
//   intervals.sort((a, b) => a[0] - b[0]);
//   // 合并区间
//   for (let i = 0; i < intervals.length - 1; i++) {
//     const right = intervals[i][1];
//     const nextLeft = intervals[i + 1][0];
//     const nextRight = intervals[i + 1][1];
//     if (right >= nextLeft) {
//       intervals[i][1] = right > nextRight ? right : nextRight;
//       intervals.splice(i + 1, 1);
//       i--;
//     }
//   }

//   return intervals;
// }

// 解法2，新增一个merged数组，用来存储已经合并的结果。
// 依次取出interval中的元素，然后与merged的最后一项比较
function merge(intervals: number[][]): number[][] {
  intervals.sort((a, b) => a[0] - b[0]);

  const merged = [];
  for (let i = 0; i < intervals.length; i++) {
    if (!merged.length || merged[merged.length - 1][1] < intervals[i][0]) {
      // 没有重叠，直接推进
      merged.push(intervals[i]);
    } else {
      // 合并一下
      merged[merged.length - 1][1] = Math.max(
        merged[merged.length - 1][1],
        intervals[i][1]
      );
    }
  }

  return merged;
}
// @lc code=end
export { merge };
