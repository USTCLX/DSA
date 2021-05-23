/*
 * @lc app=leetcode.cn id=394 lang=typescript
 *
 * [394] 字符串解码
 */

// @lc code=start
function decodeString(s: string): string {
  if (!s) return s;
  const reg = /(\d)\[([A-Za-z]+)\]/;
  let res;
  while ((res = reg.exec(s))) {
    let [target, count, chars] = res;
    let temp = "";
    for (let i = 0; i < Number(count); i++) {
      temp += chars;
    }
    s = s.replace(target, temp);
  }

  return s;
}
// @lc code=end

export { decodeString };
