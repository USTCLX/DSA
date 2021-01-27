/*
 * @lc app=leetcode.cn id=46 lang=typescript
 *
 * [46] 全排列
 */

// @lc code=start

// function swap(nums: number[], a: number, b: number) {
//   const temp = nums[a];
//   nums[a] = nums[b];
//   nums[b] = temp;
// }

// // 递归函数的参数除了要有数组外，还需要一个index来标记当前排到几个数字了
// function helper(nums: number[], index: number, result: number[][]) {
//   if (index === nums.length - 1) {
//     result.push([...nums]);
//     return;
//   }

//   for (let i = index; i < nums.length; i++) {
//     swap(nums, i, index);
//     helper(nums, index + 1, result);
//     swap(nums, i, index);
//   }
// }

// 标准的深度优先
// 深度的体现就是depth，其实也是数组的index
// 和交换位置的思想，略有不同
/**
 *
 * @param nums
 * @param depth
 * @param path 代表当前排列的路径，是一个栈
 * @param result
 */
function dfs(
  nums: number[],
  depth: number,
  path: number[],
  used: boolean[],
  result: number[][]
) {
  if (depth === nums.length) {
    result.push([...path]);
    return;
  }

  // 这里需要每次都从0开始遍历，而不能从depth？？？
  for (let i = 0; i < nums.length; i++) {
    if (used[i]) continue;
    path.push(nums[i]);
    used[i] = true;
    dfs(nums, depth + 1, path, used, result);
    path.pop();
    used[i] = false;
  }
}

// 需要递归和回溯
function permute(nums: number[]): number[][] {
  const result: number[][] = [];
  const path: number[] = [];
  const used: boolean[] = Array(nums.length).fill(false);
  dfs(nums, 0, path, used, result);
  return result;
}
// @lc code=end
