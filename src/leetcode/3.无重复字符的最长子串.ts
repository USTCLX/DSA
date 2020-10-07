/*
 * @lc app=leetcode.cn id=3 lang=typescript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
// function lengthOfLongestSubstring(s: string): number {
//   let pre = 0;
//   let cur = 0;
//   let subStr = "";
//   let maxLength = 0;
//   for (; cur < s.length; cur++) {
//     if (subStr.includes(s[cur])) {
//       pre += s.slice(pre).indexOf(s[cur]) + 1;
//     }
//     subStr = s.slice(pre, cur + 1);
//     if (subStr.length > maxLength) {
//       maxLength = subStr.length;
//     }
//   }
//   return maxLength;
// }
function isExist(s: string, left: number, right: number): boolean {
  return s.slice(left, right).includes(s[right]);
}

function lengthOfLongestSubstring(s: string): number {
  let pre = 0;
  let cur = 0;
  let max = 0;
  while (cur < s.length) {
    if (!isExist(s, pre, cur)) {
      cur++;
    } else if (pre < cur) {
      pre++;
    } else {
      cur++;
    }
    if (cur - pre > max) {
      max = cur - pre;
    }
  }
  return max;
}
// @lc code=end
