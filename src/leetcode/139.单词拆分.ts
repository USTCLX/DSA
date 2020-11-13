/*
 * @lc app=leetcode.cn id=139 lang=typescript
 *
 * [139] 单词拆分
 */

// @lc code=start

function canBreak(str: string, words: Set<string>, memo: Set<string>) {
  if (!str.length) return true;

  if (memo.has(str)) return false;

  for (let i = 0; i < str.length; i++) {
    if (
      words.has(str.slice(0, i + 1)) &&
      canBreak(str.slice(i + 1), words, memo)
    ) {
      return true;
    }
  }

  memo.add(str);

  return false;
}

function wordBreak(s: string, wordDict: string[]): boolean {
  const words = new Set(wordDict);
  const memo = new Set<string>();
  return canBreak(s, words, memo);
}
// @lc code=end
