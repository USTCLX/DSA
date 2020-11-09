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
// function isExist(s: string, left: number, right: number): boolean {
//   return s.slice(left, right).includes(s[right]);
// }

// function lengthOfLongestSubstring(s: string): number {
//   let pre = 0;
//   let cur = 0;
//   let max = 0;
//   while (cur < s.length) {
//     if (!isExist(s, pre, cur)) {
//       cur++;
//     } else if (pre < cur) {
//       pre++;
//     } else {
//       cur++;
//     }
//     if (cur - pre > max) {
//       max = cur - pre;
//     }
//   }
//   return max;
// }

// 暴力法
// 遍历每个字符，然后尝试将后面的字符往前拼，并记录最大值
// 还是要两层循环
// function lengthOfLongestSubstring(s: string): number {
//   if (!s) return 0;
//   let count = 0;
//   for (let i = 0; i < s.length; i++) {
//     let cur = s[i];
//     for (let j = i + 1; j < s.length; j++) {
//       if (cur.includes(s[j])) {
//         break;
//       } else {
//         cur += s[j];
//       }
//     }
//     count = Math.max(count, cur.length);
//   }
//   return count;
// }

// 优化啦
// 能用dp吗？
// dp[i] 代表以s[i]为结尾的最大不含重复字符的子串的长度
// dp[i] = dp[i-1] + 1; 不过dp i中需要同时记录最长子串哦
// 这样会有额外的存储空间。可以优化
// function lengthOfLongestSubstring(s: string): number {
//   if (!s) return 0;
//   // 这里不需要一整个数组，用一个对象，随着迭代来更新就好了
//   const dp = { count: 1, str: s[0] };
//   let count = 1;
//   for (let i = 1; i < s.length; i++) {
//     const str = dp.str;
//     const index = str.indexOf(s[i]);
//     if (index === -1) {
//       // 没有重复的
//       dp.count = dp.count + 1;
//       dp.str = dp.str + s[i];
//     } else {
//       dp.count = dp.str.length - index;
//       dp.str = dp.str.substr(index + 1) + s[i];
//     }
//     count = Math.max(count, dp.count);
//   }
//   return count;
// }

// 第三种解法
// 很精妙啊，有两个指针，一个指针指向当前的字符，一个指向上一个不重复的字符
// 一个while循环，直到当前指针指到最后一个字符，期间不停的更新count
// 这种果然够快的。。。beats 97%
function exist(s: string, left: number, right: number): boolean {
  return s.slice(left, right).includes(s[right]);
}
function lengthOfLongestSubstring(s: string): number {
  if (!s.length) return 0;

  let count = 0;
  let curP = 0;
  let preP = 0;

  while (curP < s.length) {
    if (!exist(s, preP, curP)) {
      // 不存在重复字符
      curP++;
    } else if (preP < curP) {
      // 先尝试移动后面的指针，这就不用记录整个子串了，可以挨个尝试
      preP++;
    }
    // curP 已经被增加了，上一个curP才是ok的
    count = Math.max(count, curP - preP);
  }

  return count;
}
// @lc code=end

export { lengthOfLongestSubstring };
