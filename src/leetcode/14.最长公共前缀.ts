/*
 * @lc app=leetcode.cn id=14 lang=typescript
 *
 * [14] 最长公共前缀
 */

// @lc code=start

function lcpBetweenTwo(str1: string, str2: string): string {
  if (!str1 || !str2) return "";

  let prefix = "";
  const length = Math.min(str1.length, str2.length);

  for (let i = 0; i < length; i++) {
    if (str1[i] === str2[i]) {
      prefix += str2[i];
    } else {
      break;
    }
  }

  return prefix;
}

function longestCommonPrefix(strs: string[]): string {
  if (strs.length === 0) return "";

  let prefix = strs[0];

  for (let i = 1; i < strs.length; i++) {
    prefix = lcpBetweenTwo(prefix, strs[i]);
    if (!prefix) break;
  }

  return prefix;
}
// @lc code=end
