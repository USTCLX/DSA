/*
 * @Author: lixiang
 * @Date: 2020-02-05 11:11:41
 * @Last Modified by: lixiang
 * @Last Modified time: 2020-02-05 11:20:41
 * @Description: 进制转换，将10进制转换为任意小于等于16进制的数
 */

export default (n: number, base: number): string => {
  if (!base) return n.toString();
  const stack = [];
  const chars = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"
  ];
  while (n > 0) {
    stack.push(chars[n % base]);
    n = Math.floor(n / base);
  }
  let result = "";
  while (stack.length) {
    result += stack.pop();
  }
  return result;
};
