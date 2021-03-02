/*
 * @lc app=leetcode.cn id=71 lang=typescript
 *
 * [71] 简化路径
 */

// @lc code=start
// ./ 当前路径
// ../ 上一级
// function simplifyPath(path: string): string {
//   const arr = path.split("/");
//   const stack: string[] = [];
//   for (let str of arr) {
//     if (str == "") {
//       continue;
//     } else if (str == ".") {
//       continue;
//     } else if (str == "..") {
//       stack.pop();
//     } else {
//       stack.push(str);
//     }
//   }
//   let ans = stack.join("/");
//   return `/${ans}`;
// }

// @lc code=end
