/*
 * @lc app=leetcode.cn id=202 lang=typescript
 *
 * [202] 快乐数
 */

// @lc code=start
// 使用set存储已经计算过的值，用来判断是否进入循环
// function isHappy(n: number): boolean {
//   const set = new Set();

//   while (n !== 1) {
//     if (set.has(n)) return false;
//     set.add(n);

//     let temp = n;
//     n = 0;
//     while (temp !== 0) {
//       n += Math.pow(temp % 10, 2);
//       temp = Math.floor(temp / 10);
//     }
//   }

//   return true;
// }
// 使用快慢指针来判断是否是循环
// 当快慢指针相等时，判断是否是1，如果是1，返回true，否则返回false
function next(n: number): number {
  let next = 0;
  while (n) {
    next += Math.pow(n % 10, 2);
    n = Math.floor(n / 10);
  }
  return next;
}
function isHappy(n: number): boolean {
  let slow = n;
  let fast = n;
  while (slow && fast) {
    slow = next(slow);
    fast = next(next(fast));
    if (slow === fast) {
      return slow === 1 ? true : false;
    }
  }
  return false;
}
// @lc code=end

export { isHappy };
