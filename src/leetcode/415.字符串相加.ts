/*
 * @lc app=leetcode.cn id=415 lang=typescript
 *
 * [415] 字符串相加
 */

// @lc code=start
function addStrings(num1: string, num2: string): string {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let add = 0;

  const ans: number[] = [];
  while (i >= 0 || j >= 0 || add !== 0) {
    const x = i >= 0 ? num1.charCodeAt(i--) - 48 : 0;
    const y = j >= 0 ? num2.charCodeAt(j--) - 48 : 0;
    const res = x + y + add;
    ans.unshift(res % 10);
    add = ~~(res / 10);
  }

  return ans.join("");
}
// @lc code=end
