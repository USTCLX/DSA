/*
 * @lc app=leetcode.cn id=43 lang=typescript
 *
 * [43] 字符串相乘
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

function multiply(num1: string, num2: string): string {
  if (num1 === "0" || num2 === "0") return "0";

  let m = num1.length - 1;
  let n = num2.length - 1;

  let res = "";

  for (let i = n; i >= 0; i--) {
    const x = num2.charCodeAt(i) - 48;
    let carry = 0;
    let ans = [];

    // 补0
    for (let k = i; k < n; k++) {
      ans.push(0);
    }

    // 相乘
    for (let j = m; j >= 0; j--) {
      const y = num1.charCodeAt(j) - 48;
      const temp = x * y + carry;
      ans.unshift(temp % 10);
      carry = ~~(temp / 10);
    }

    // 补充最后的进位
    if (carry !== 0) ans.unshift(carry);

    // 和当前和相加
    res = addStrings(res, ans.join(""));
  }

  return res;
}
// @lc code=end
