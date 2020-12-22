/*
 * @lc app=leetcode.cn id=151 lang=typescript
 *
 * [151] 翻转字符串里的单词
 */

// @lc code=start
// 三行代码搞定，战胜100%的人
// function reverseWords(s: string): string {
//   const arr = s.trim().split(/\s+/g);
//   return arr.reverse().join(" ");
// }

// 直接手写代码
// 遍历字符串
function reverseWords(s: string): string {
  let left = 0;
  let right = s.length - 1;

  // 去掉首尾两端的空格
  while (s[left] === " ") left++;
  while (s[right] === " ") right--;

  // 存放结果
  const dquene = [];
  let word = "";
  while (left <= right) {
    if (s[left] !== " ") {
      // 不是空格，拼接单词
      word += s[left];
    } else if (word !== "") {
      // 是空格，并且存在拼接好的单词，将单词加入双端队列
      dquene.unshift(word);
      // 清空单词
      word = "";
    }
    left++;
  }
  // 补充最后一个word
  if (word) {
    dquene.unshift(word);
  }
  return dquene.join(" ");
}
// @lc code=end
export { reverseWords };
