/*
 * @lc app=leetcode.cn id=435 lang=typescript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * 1.按照起点进行排序 [[1,2],[1,3],[2,3],[3,4]]
 * 2.依次选择出一个区间，这个区间需要满足
 *  2.1.不与上一个区间的末尾重叠
 *  2.2.起点值尽量小
 *  3.3.终点值尽量小
 * 3.计算选出的区间的个数
 * 4.当前区间的个数减去选出区间的个数，就是需要移除的区间个数
 */
function eraseOverlapIntervals(intervals: number[][]): number {
  if (intervals.length <= 1) return 0;
  // 排序
  intervals.sort((a, b) => a[0] - b[0]);
  // 挑选
  const result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const current = intervals[i];
    let lastOfResult = result[result.length - 1];
    if (current[0] === lastOfResult[0] && current[1] < lastOfResult[1]) {
      // case1 当前区间的起点和上一个区间相同，但是终点小于上一个区间
      result[result.length - 1] = current;
    } else if (current[0] >= lastOfResult[1]) {
      // case 2 当前区间的终点大于上一个区间的起点
      result.push(current);
    } else if (current[0] > lastOfResult[0] && current[1] < lastOfResult[1]) {
      // case 3 当前区间的起点大于上一个区间，但是终点小于上一个区间
      result[result.length - 1] = current;
    }
  }
  return intervals.length - result.length;
}
// @lc code=end
