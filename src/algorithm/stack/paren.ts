/*
 * @Author: lixiang
 * @Date: 2020-02-05 11:44:19
 * @Last Modified by: lixiang
 * @Last Modified time: 2020-02-05 11:55:36
 * @Descriptiopn: 利用栈实现括号匹配算法
 */

export default (exp: string): boolean => {
  const stack = [];
  for (let i = 0; i < exp.length; i++) {
    if (exp[i] === "(") {
      stack.push(exp[i]);
    } else if (stack.length) {
      stack.pop();
    } else {
      return false;
    }
  }
  return !stack.length;
};
