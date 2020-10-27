/*
 * @lc app=leetcode.cn id=5 lang=typescript
 *
 * [5] 最长回文子串
 */

// @lc code=start

function expand(s: string, left: number, right: number): string {
  let result = "";

  while (left >= 0 && right < s.length && s[left] === s[right]) {
    result = s.slice(left, right + 1);
    left--;
    right++;
  }

  return result;
}

function longestPalindrome(s: string): string {
  let result = "";
  for (let i = 0; i < s.length; i++) {
    const str1 = expand(s, i, i);
    const str2 = expand(s, i, i + 1);

    const str = str1.length > str2.length ? str1 : str2;

    result = str.length > result.length ? str : result;
  }

  return result;
}
// @lc code=end
