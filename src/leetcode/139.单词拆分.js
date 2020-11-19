/*
 * @lc app=leetcode.cn id=139 lang=javascript
 *
 * [139] 单词拆分
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */

// 一开始的思路是错误的
// 1. 期望把s所有的拆分都求出来，然后再逐个验证这些拆分中是否有全部都在set中的一组，如果有就返回true
//    这样做显然增加了很大的复杂和浪费（因为可能大部分的组合都是不行的，白白的把他们求出来并且储存起来了）
// 2. 第二种思路更加的合理清晰
//    从0开始往期，尽量找出一个单词在set中，如果在了，就再去尝试找后面剩下的字符串，知道最后没有剩下字符串，就说明找到了一个这样的组合。
// 3. 带来的启发就是，不要试图简单暴力的求出所有组合，还是要将问题分解和找规律。将问题分解为更小的问题，然后看看小问题和原问题是否是类似的
// var canBreak = function(str, words, memo) {
//   if (!str.length) {
//     // 如果是一个空字符，默认是可以在word中找到（因为也不需要找）
//     return true;
//   }

//   if (memo.has(str)) {
//     return false;
//   }
//   for (let i = 0; i < str.length; i++) {
//     if (
//       words.has(str.slice(0, i + 1)) &&
//       canBreak(str.slice(i + 1), words, memo)
//     ) {
//       return true;
//     }
//   }
//   memo.add(str);
//   return false;
// };
// var wordBreak = function(str, wordDict) {
//   const words = new Set(wordDict);
//   const memo = new Set();
//   return canBreak(str, words, memo);
// };

var canBreak = function(str, wordDict, memo) {
  if (!str) return true;
  if (memo.has(str)) return false;
  const len = str.length;
  for (let i = 0; i < len; i++) {
    const s1 = str.slice(0, i + 1);
    const s2 = str.slice(i + 1);
    if (wordDict.has(s1) && canBreak(s2, wordDict, memo)) {
      return true;
    }
  }
  memo.add(str);
  return false;
};

var wordBreak = function(str, wordDict) {
  const dict = new Set(wordDict);
  const memo = new Set();

  return canBreak(str, dict, memo);
};

// @lc code=end
