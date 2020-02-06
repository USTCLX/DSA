/*
 * @Author: lixiang
 * @Date: 2020-02-05 11:44:19
 * @Last Modified by: lixiang
 * @Last Modified time: 2020-02-06 11:17:26
 * @Descriptiopn: 利用栈实现括号匹配算法
 */

export default (exp: string): boolean => {
  const stack = [];
  const leftMarks = ["{", "[", "("];
  const leftRightMap: any = {
    "}": "{",
    "]": "[",
    ")": "("
  };
  for (let i = 0; i < exp.length; i++) {
    if (leftMarks.includes(exp[i])) {
      stack.push(exp[i]);
    } else if (stack.length) {
      const top = stack.pop();
      if (top !== leftRightMap[exp[i]]) {
        return false;
      }
    } else {
      return false;
    }
  }
  return !stack.length;
};
