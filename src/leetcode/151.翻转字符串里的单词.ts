/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
function reverseWords(s: string): string {
  let left = 0;
  let right = s.length - 1;

  while (s[left] === " ") left++;
  while (s[right] === " ") right--;

  let ans = [];
  let word = "";
  while (left <= right) {
    if (s[left] === " ") {
      if (word) {
        ans.unshift(word);
        word = "";
      }
    } else {
      word += s[left];
    }
    left++;
  }

  if (word) ans.unshift(word);

  return ans.join(" ");
}
// @lc code=end
