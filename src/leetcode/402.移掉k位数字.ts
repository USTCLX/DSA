/*
 * @lc app=leetcode.cn id=402 lang=typescript
 *
 * [402] 移掉K位数字
 */

// @lc code=start
function removeKdigits(num: string, k: number): string {
  // 维护一个栈
  const stack = [];
  for (let i = 0; i < num.length; i++) {
    if (!stack.length && num[i] === "0") {
      continue;
    }

    if (k === 0 || !stack.length || num[i] >= stack[stack.length - 1]) {
      // 当前元素大于等于栈顶元素，因此可以直接入栈
      stack.push(num[i]);
    } else {
      // 当前元素小于栈顶元素，将栈顶元素弹出
      stack.pop();
      stack.push(num[i]);
      k--;
    }
  }

  // 如果k不为0，直接删除低位的数字
  if (k !== 0) {
    stack.pop();
    k--;
  }

  return stack.join("");
}
// @lc code=end

export { removeKdigits };
